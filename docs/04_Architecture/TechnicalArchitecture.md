# Technical Architecture — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.1.0                          |
| Status       | Updated                        |
| Authors      | Muhammadrizo Shokirov          |
| Last Updated | 2026-06-18                     |

---

# 🔁 4. Firebase Architecture (UPDATED)

## 4.1 Firestore Structure (UPDATED)

```text id="db1_updated"
users/
  {userId}/
    firstName
    lastName
    fullName
    email
    avatarUrl
    level
    xp
    coins
    currentCity

user_passports/
  {userId}/
    citiesUnlocked: []
    visas: []
    stamps: []
    currentStampTheme

cities/
  {cityId}/
    name
    requiredXP
    lessons[]
    missions[]

lessons/
  {lessonId}/
    title
    words[]
    grammar[]
    cityId

missions/
  {missionId}/
    type
    rewardXP
    cityId

duels/
  {duelId}/
    players[]
    status
    score
    questions[]
```

---

# 🔥 4.2 Key Architecture Fix: Passport Separation

## ❗ OLD IDEA (removed conceptually)

* passport was inside `users`

## ✅ NEW CORRECT MODEL

Passport is now a **separate domain entity**

### Why this is better:

* reduces user document size
* allows independent scaling
* easier updates (stamps/visas grow fast)
* avoids Firestore write conflicts
* better future multi-center support

---

# 🧠 Passport Definition (UPDATED)

Passport is NOT a UI concept.

Passport is a **progress state system**.

It contains:

* unlocked cities
* visa history
* stamps collection
* progression milestones

It is tightly connected to user, but stored separately.

---

# 🧑 3. Android App Architecture (SMALL UPDATE)

## 3.4 Added Module Clarification

### 6. Passport Module (UPDATED)

Now explicitly handles:

* user_passport data
* visa logic
* stamps rendering
* progression state

Not mixed with User Profile.

---

# ⚡ 6. Data Flow Architecture (UPDATED)

## 6.3 Passport Flow (NEW)

```text id="flow_passport"
User Action (XP / Mission / Duel)
↓
Repository
↓
PassportRepository
↓
user_passports/{userId} update
↓
UI Passport Refresh
```

---

# 🛡 10. Security Model (CLARIFICATION)

* user can only write:

  * users/{userId}
  * user_passports/{userId}

* cities / missions / lessons:

  * read-only for client

---

# 📌 13. Risks (UPDATED)

### NEW RISK ADDED

* Passport data inconsistency if user + passport desync

Mitigation:

* atomic updates (where possible)
* transaction usage in critical updates
