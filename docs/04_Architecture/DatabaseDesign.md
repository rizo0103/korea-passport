# Database Design — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.0.0                          |
| Status       | Draft                          |
| Authors      | Muhammadrizo Shokirov, ChatGPT |
| Last Updated | 2026-06-18                     |

---

# 1. Overview

Этот документ описывает структуру базы данных Korea Passport в Firebase (Firestore + Realtime Database), включая:

* коллекции
* документы
* поля
* типы данных
* связи
* правила обновления
* критические транзакции

---

# 2. Database Principles

## 2.1 Core Rules

1. Данные должны быть **денормализованы для скорости**
2. Часто читаемые данные дублируются (XP, level)
3. Критические операции должны использовать **transaction**
4. Passport = отдельная сущность
5. User data ≠ Progress data

---

## 2.2 Read vs Write Strategy

* Reads должны быть быстрыми (1–2 запроса максимум)
* Writes могут быть сложнее (через сервисы/репозитории)

---

# 3. Collections Overview

```text id="db_overview"
users/
user_passports/
cities/
lessons/
missions/
duels/
leaderboards/
center_groups/
```

---

# 4. USERS Collection

## 4.1 Path

`users/{userId}`

## 4.2 Schema

```text id="users_schema"
firstName: string
lastName: string
fullName: string
email: string
avatarUrl: string

level: number
xp: number
coins: number

currentCityId: string
createdAt: timestamp
lastActiveAt: timestamp
```

---

## 4.3 Rules

* user can only update their own document
* xp/level updates ONLY via system logic (not direct client trust)

---

# 5. USER PASSPORTS Collection

## 5.1 Path

`user_passports/{userId}`

## 5.2 Schema

```text id="passport_schema"
userId: string

citiesUnlocked: string[]      // cityIds
currentCityId: string

visas: {
  cityId: string
  status: "locked" | "active" | "completed"
  unlockedAt: timestamp
}[]

stamps: {
  id: string
  title: string
  icon: string
  earnedAt: timestamp
}[]

progressPercentage: number
```

---

## 5.3 Logic Rules

* Visa unlock = gateway to next city
* Stamps are additive (never deleted)
* CitiesUnlocked grows linearly

---

## 5.4 Sync Rule

Passport must always reflect:

> users.xp + mission progress + duel results

---

# 6. CITIES Collection

## 6.1 Path

`cities/{cityId}`

## 6.2 Schema

```text id="cities_schema"
name: string
description: string

requiredXP: number
order: number

lessons: string[]   // lessonIds
missions: string[]  // missionIds
```

---

## 6.3 Progress Rule

City unlock condition:

```text
user.xp >= city.requiredXP
AND previous city completed
```

---

# 7. LESSONS Collection

## 7.1 Path

`lessons/{lessonId}`

## 7.2 Schema

```text id="lessons_schema"
title: string
cityId: string

words: {
  korean: string
  translation: string
}[]

grammar: string[]
examples: string[]

xpReward: number
```

---

# 8. MISSIONS Collection

## 8.1 Path

`missions/{missionId}`

## 8.2 Schema

```text id="missions_schema"
type: "lesson" | "practice" | "duel" | "quiz"

cityId: string

title: string
description: string

xpReward: number
coinReward: number
```

---

## 8.3 Mission Completion Rule

Mission считается выполненной если:

* lesson completed OR
* practice passed OR
* duel won OR
* quiz passed

---

# 9. DUELS Collection

## 9.1 Path

`duels/{duelId}`

## 9.2 Schema

```text id="duels_schema"
player1Id: string
player2Id: string

status: "waiting" | "active" | "finished"

questions: {
  question: string
  options: string[]
  correctAnswer: string
}[]

scores: {
  player1: number
  player2: number
}

currentQuestionIndex: number

startedAt: timestamp
finishedAt: timestamp
```

---

## 9.3 Duel Rules

* each duel = fixed question set
* no regeneration mid-match
* scoring is deterministic

---

# 10. REALTIME DATABASE (Firebase RTDB)

Used ONLY for live synchronization.

```text id="rtdb"
activeDuels/
  {duelId}/
    playerStates
    currentQuestionIndex
    timer
```

---

## 10.1 Why RTDB?

* low latency
* real-time updates
* ideal for duel sync

---

# 11. LEADERBOARDS Collection

## 11.1 Path

`leaderboards/global`

## 11.2 Schema

```text id="leaderboard_schema"
userId: string
xp: number
level: number
rank: number
```

---

## 11.3 Update Rule

* updated daily OR on XP change threshold
* not real-time (to reduce cost)

---

# 12. CENTER GROUPS Collection

## 12.1 Path

`center_groups/{groupId}`

## 12.2 Schema

```text id="groups_schema"
name: string
teacherId: string

students: string[] // userIds

activeEvents: string[]
```

---

# 13. TRANSACTION RULES (CRITICAL)

## 13.1 XP Update

Must use transaction:

* read current XP
* add reward
* update level if threshold reached
* update passport progress

---

## 13.2 Duel Result

On finish:

* update XP
* update coins
* update passport progress
* update leaderboard

ALL IN ONE CONTROLLED FLOW

---

# 14. DATA CONSISTENCY RULES

## 14.1 Single Source of Truth

* XP → users
* Progress → user_passports
* Content → cities/lessons/missions

---

## 14.2 No Direct Client Trust

Client NEVER:

* sets XP directly
* unlocks cities manually
* modifies duel results

---

# 15. SCALING STRATEGY

## Phase 1 (MVP)

* Firestore only
* RTDB only for duels

## Phase 2

* Cloud Functions for XP logic
* server-side validation

## Phase 3

* multi-center replication
* analytics layer

---

# 16. PERFORMANCE RULES

* avoid full collection reads
* paginate leaderboards
* cache lessons locally
* minimal real-time listeners

---

# 17. FINAL DATA MODEL PHILOSOPHY

> Data must be simple to read, safe to update, and predictable in structure.

Complexity is allowed in backend logic, NOT in data shape.
