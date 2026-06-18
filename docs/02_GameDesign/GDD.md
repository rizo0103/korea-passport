# Game Design Document (GDD) — Korea Passport

## Document Information

| Field        | Value                           |
| ------------ | ------------------------------- |
| Version      | 1.0.0                           |
| Status       | Approved                        |
| Author       | Muhammadrizo Shokirov & ChatGPT |
| Last Updated | 2026-06-18                      |

---

# 1. Game Overview

## 1.1 Game Concept

Korea Passport — это образовательная геймифицированная система, в которой изучение корейского языка представлено как путешествие по Южной Корее.

Игрок (ученик) проходит путь от новичка до уверенного пользователя языка, открывая города, выполняя задания, участвуя в дуэлях и собирая достижения.

---

## 1.2 Core Fantasy

Игрок не “учит язык”.

Игрок:

* путешествует по Корее;
* получает визы;
* открывает новые регионы;
* становится “гражданином языка”.

---

## 1.3 Player Experience Pillars

1. **Progression Feel** — всегда есть следующий шаг
2. **Competition** — дуэли и рейтинги
3. **Exploration** — открытие городов
4. **Reward Loop** — постоянные награды
5. **Identity Building** — паспорт как отражение личности

---

# 2. Core Game Loop

## 2.1 Primary Loop

```text id="gddloop1"
Learn Lesson
↓
Complete Practice
↓
Complete Mission
↓
Win Word Duel
↓
Earn XP + Coins
↓
Unlock Visa Progress
↓
Open New Content
↓
Repeat
```

---

## 2.2 Meta Loop (Long-Term)

```text id="gddloop2"
Daily Play
↓
Streak Growth
↓
City Unlocks
↓
Passport Expansion
↓
Rank Increase
↓
Center Competition
```

---

# 3. Progression System

## 3.1 XP System

XP — основной показатель прогресса.

### Sources:

* Lessons
* Missions
* Word Duel victories
* Daily challenges

### Purpose:

* unlock Visa
* increase Level
* track overall progress

---

## 3.2 Level System

* Level = long-term progress indicator
* Does NOT unlock content directly
* Used for ranking & identity

---

## 3.3 Cities System

Каждый город = этап обучения.

| City    | Theme             |
| ------- | ----------------- |
| Incheon | Basics            |
| Seoul   | Everyday language |
| Busan   | Conversations     |
| Jeju    | Travel & nature   |

### Rules:

* City открывается только через Visa
* Каждый City содержит набор Lessons + Missions
* Города идут строго по прогрессии

---

## 3.4 Visa System (Core Gate Mechanic)

Visa — ключ к прогрессии.

### Requirements:

* XP threshold
* Mission completion
* Optional: Duel wins

### Function:

* открывает следующий City
* ограничивает быстрый прогресс
* создаёт ощущение “достижения”

---

## 3.5 Passport System

Passport = визуальный прогресс игрока.

Contains:

* unlocked cities
* stamps
* level
* current visa status

---

# 4. Reward System

## 4.1 XP (Experience Points)

* progression metric
* unlock system driver

---

## 4.2 Coins

* cosmetic currency
* used for:

  * passport skins
  * badges
  * visual upgrades
* NOT linked to learning progress

---

## 4.3 Stamps

Collectible achievements tied to milestones.

Examples:

* 100 words learned
* Seoul completed
* Duel Master

---

## 4.4 Achievements

System-triggered milestones.

Difference:

* Achievements = system logic
* Stamps = visual collection

---

# 5. Word Duel System (Core Competitive Feature)

## 5.1 Concept

Real-time or async competition between players to solve language tasks.

---

## 5.2 Duel Types

### 1. Speed Duel

Fast translation competition.

### 2. Listening Duel

Identify correct phrase from audio.

### 3. Typing Duel

Type correct Korean sentence.

### 4. Choice Duel

Multiple-choice answers.

---

## 5.3 Scoring System

* Correct answer = points
* Speed bonus = extra points
* Win = XP + Coins + Visa progress boost

---

## 5.4 Match Flow

```text id="duelflow1"
Match Start
↓
Question 1
↓
Answer
↓
Score Update
↓
Repeat (5–10 rounds)
↓
Final Result
↓
Rewards
```

---

## 5.5 Anti-Frustration Rule

Even if player loses:

* they still gain XP
* they still progress slightly

Reason:

> prevent drop-off for beginners

---

# 6. Daily Systems

## 6.1 Daily Challenge

* 1 main task per day
* encourages return behavior

---

## 6.2 Streak System

* tracks consecutive days
* increases reward multiplier

---

## 6.3 Daily Reward

* XP bonus
* Coins bonus
* occasional Stamp

---

# 7. Center System (Social Layer)

## 7.1 Groups

* students grouped by class
* group leaderboard

---

## 7.2 Center Competitions

* monthly tournaments
* Word Duel battles between groups

---

## 7.3 Teacher Role

* assigns missions
* monitors progress
* triggers events

---

# 8. Balancing Rules

## 8.1 Progress Speed

* 1 City = several days/weeks
* prevents fast burnout

---

## 8.2 XP Economy

* XP is abundant but gated via Visa
* prevents meaningless grinding

---

## 8.3 Duel Importance

* Duels = optional but rewarding
* never required for basic learning

---

# 9. Failure Handling

## 9.1 No Progress Day

If user does nothing:

* streak resets
* but no penalties

---

## 9.2 Losing Duel

* partial XP
* no hard punishment

---

# 10. Design Principles

1. Learning must always feel like progress.
2. Game mechanics support education, not replace it.
3. Player always knows next goal.
4. No dead ends — always a next step.
5. Competition motivates, not punishes.
6. Visual progress is as important as numeric progress.

---

# 11. Long-Term Scaling

System must support:

* multiple centers
* multiple languages
* seasonal events
* global leaderboard (future)

---

# 12. Definition of Fun

Fun in Korea Passport is defined as:

> “I am getting closer to unlocking the next part of Korea.”
