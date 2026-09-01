# Features Specification — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.0.0                          |
| Status       | Final                          |
| Authors      | Muhammadrizo Shokirov          |
| Last Updated | 2026-06-18                     |

---

# 1. Purpose

Этот документ описывает **все функциональные возможности Korea Passport**, их приоритеты и статус (MVP / Future).

---

# 2. Feature Priority Model

| Priority | Meaning            |
| -------- | ------------------ |
| P0       | MUST HAVE (MVP)    |
| P1       | SHOULD HAVE        |
| P2       | FUTURE / EXPANSION |

---

# 3. Core Features (P0 — MVP)

## 3.1 Authentication System

* Email/password login
* Registration
* Firebase Auth integration
* Session persistence

---

## 3.2 User Profile System

* firstName / lastName
* avatarUrl
* level / xp / coins
* current city tracking

---

## 3.3 Passport System (Core Feature)

* visual progress tracking
* unlocked cities
* visa status system
* stamps collection
* progress percentage

---

## 3.4 Cities System

* list of cities
* unlock based on XP + visa rules
* city detail screen

---

## 3.5 Learning System

* lessons (vocabulary, grammar, examples)
* practice mode
* XP rewards per lesson

---

## 3.6 Missions System

* daily / city-based missions
* XP + coin rewards
* progression triggers

---

## 3.7 Word Duel System (Core Game Feature)

* real-time 1v1 duels
* question-based gameplay
* scoring system
* XP + coins rewards
* result screen

---

## 3.8 Reward System

* XP gain
* coins (cosmetic currency)
* stamps (achievements)

---

## 3.9 Daily System

* daily challenges
* streak system
* daily rewards

---

# 4. P1 Features (Post-MVP)

## 4.1 Leaderboard System

* global ranking
* center-based ranking
* duel ranking

---

## 4.2 Center System

* groups of students
* teacher-managed progress
* group competitions

---

## 4.3 Enhanced Duel Modes

* timed mode
* listening mode
* typing mode expansion

---

# 5. P2 Features (Future Expansion)

## 5.1 Multi-language Support

* other languages besides Korean

---

## 5.2 AI Assistance (Optional)

* smart hints
* adaptive difficulty
* personalized learning paths

---

## 5.3 Marketplace System

* cosmetic shop
* passport skins
* badges customization

---

## 5.4 Events System

* seasonal challenges
* tournaments
* special missions

---

# 6. Feature Dependencies

* Passport depends on XP + Missions
* Cities depend on Passport system
* Duels influence XP + Passport progression
* Missions depend on Cities

---

# 7. Feature Philosophy

* Every feature must support learning
* No feature exists only for decoration
* Game mechanics must reinforce education
