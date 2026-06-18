# User Flow — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.0.0                          |
| Status       | Final                          |
| Authors      | Muhammadrizo Shokirov, ChatGPT |
| Last Updated | 2026-06-18                     |

---

# 1. Purpose

Этот документ описывает **полный путь пользователя внутри приложения**.

---

# 2. Entry Flow

```text id="flow_entry"
App Open
↓
Splash Screen
↓
Auth Check
   ├── Logged In → Home
   └── Not Logged In → Login/Register
```

---

# 3. Core Home Flow (Passport Hub)

```text id="flow_home"
Home (Passport)
↓
View Progress (City + Visa)
↓
Select Action:
   ├── Continue Learning
   ├── Go to Cities
   ├── Start Duel
   └── Check Profile
```

---

# 4. Learning Flow

```text id="flow_learning"
City Screen
↓
Select Lesson
↓
Lesson Screen
↓
Practice Mode
↓
Mission Unlock Check
↓
XP Reward
↓
Return to Passport
```

---

# 5. Mission Flow

```text id="flow_mission"
City → Mission List
↓
Select Mission
↓
Complete Task
↓
Validate Completion
↓
Reward XP + Coins
↓
Update Passport Progress
```

---

# 6. Word Duel Flow (Core Game Loop)

```text id="flow_duel"
Duel Lobby
↓
Matchmaking
↓
Game Start
↓
Question Loop (5–10 rounds)
↓
Score Calculation
↓
Result Screen
↓
Rewards (XP + Coins + Progress)
```

---

# 7. Passport Progress Flow

```text id="flow_passport"
Any Activity (Lesson / Mission / Duel)
↓
XP Gain
↓
Update User Data
↓
Update Passport
↓
Check Visa Unlock
↓
Unlock New City (if conditions met)
↓
Return to Home
```

---

# 8. Daily Loop Flow

```text id="flow_daily"
Open App
↓
Check Daily Reward
↓
Show Daily Mission
↓
User Completes Activity
↓
Streak Update
↓
Reward Bonus
```

---

# 9. Failure Handling Flow

## 9.1 Loss in Duel

* show result
* give partial XP
* no penalty

---

## 9.2 Incomplete Lesson

* save progress
* allow resume
* no reset

---

# 10. UX Principles in Flow

* Always return to Passport (Home)
* No dead-end screens
* Every action gives feedback
* Progress must always be visible

---

# 11. Final Flow Philosophy

> The user should always feel that every action moves them closer to the next city.
