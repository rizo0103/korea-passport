# React Native Architecture — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.0.0                          |
| Status       | Draft                          |
| Authors      | Muhammadrizo Shokirov, ChatGPT |
| Last Updated | 2026-06-18                     |

---

# 1. Overview

React Native версия Korea Passport использует Expo и JavaScript/TypeScript для реализации всей клиентской части приложения.

Backend остаётся без изменений:

* Firebase Auth
* Firestore
* Realtime Database
* Storage

---

# 2. High-Level Architecture

```text id="rn_arch_1"
React Native (Expo)
        ↓
Firebase SDK
(Auth / Firestore / Realtime DB / Storage)
        ↓
Game Logic (Client-side MVP)
```

---

# 3. Core Principle

> “Same system, different client implementation”

Мы НЕ меняем:

* PRD
* GDD
* Database Design
* Architecture logic

Мы меняем только:

* UI layer
* navigation
* state management implementation

---

# 4. Project Structure (React Native)

```text id="rn_structure"
src/
│
├── app/                  # navigation entry
├── screens/              # all screens
├── components/           # reusable UI
├── modules/
│   ├── auth/
│   ├── passport/
│   ├── learning/
│   ├── duel/
│   └── profile/
│
├── services/
│   ├── firebase/
│   ├── api/
│   └── duelEngine/
│
├── store/                # global state (Zustand or Redux)
├── hooks/
├── utils/
├── constants/
└── assets/
```

---

# 5. Navigation Architecture

## 5.1 Navigation Type

* React Navigation (recommended)
* Bottom Tabs + Stack Navigation

---

## 5.2 Navigation Map

```text id="rn_nav"
AuthStack
   ├── Login
   └── Register

MainTabs
   ├── Home (Passport)
   ├── Cities
   ├── Learn
   ├── Duel
   └── Profile
```

---

# 6. State Management

## Recommended: Zustand

Why:

* lightweight
* simple
* perfect for MVP
* no boilerplate

---

## Global Stores

### 6.1 User Store

* user profile
* XP
* level
* coins

---

### 6.2 Passport Store

* citiesUnlocked
* visas
* stamps
* progress

---

### 6.3 Duel Store

* current match
* score
* timer
* questions

---

# 7. Firebase Integration Layer

## 7.1 Structure

```text id="firebase_layer"
services/firebase/
  auth.ts
  firestore.ts
  realtime.ts
  storage.ts
```

---

## 7.2 Rules

* ALL database access goes through services layer
* UI never calls Firebase directly
* stores use services only

---

# 8. Screen Architecture

## 8.1 Screens List

### Auth

* LoginScreen
* RegisterScreen

### Core

* HomeScreen (Passport)
* CitiesScreen
* CityDetailScreen

### Learning

* LessonScreen
* PracticeScreen
* MissionScreen

### Game

* DuelLobbyScreen
* DuelGameScreen
* DuelResultScreen

### Profile

* ProfileScreen
* PassportScreen
* SettingsScreen

---

# 9. Passport System (React Native)

## 9.1 Concept

Passport = visual + data layer of progress.

Rendered as:

* city map UI
* stamps grid
* visa progress bar

---

## 9.2 Data Source

```text id="rn_passport"
users/{userId}
user_passports/{userId}
```

---

# 10. Word Duel Architecture

## 10.1 Flow

```text id="rn_duel_flow"
Matchmaking (Firestore)
↓
Realtime Sync (RTDB)
↓
Game Engine (Client)
↓
Score Calculation
↓
Result saved to Firestore
```

---

## 10.2 Duel Engine (Client-side)

```text id="duel_engine"
services/duelEngine/

- questionGenerator.ts
- scoreCalculator.ts
- timerManager.ts
- syncManager.ts
```

---

# 11. Performance Strategy

* lazy screen loading
* memoized components
* FlatList for lists
* minimal re-renders
* cached Firebase data

---

# 12. Offline Mode

## Supported:

* lesson viewing
* cached passport
* practice mode (limited)

## Not supported:

* duels
* leaderboard updates

---

# 13. UI System

## Design Style (from your earlier vision):

* dark futuristic UI
* glassmorphism
* smooth transitions
* neon accents (controlled, not overload)

---

## Component Library

Reusable components:

* XPBar
* VisaProgressBar
* CityCard
* StampCard
* DuelTimer
* RewardModal

---

# 14. Security Model

* Firebase Auth required for all actions
* user can only modify own data
* duel results validated via session state
* no direct XP injection from UI

---

# 15. Scaling Strategy

## Phase 1 (MVP)

* Expo + Firebase only
* client-heavy logic

## Phase 2

* Cloud Functions for:

  * XP validation
  * duel scoring

## Phase 3

* multi-center system
* global leaderboard
* analytics

---

# 16. Key Architectural Shift

## From Kotlin Architecture → React Native Equivalent

| Kotlin Layer   | React Native Layer |
| -------------- | ------------------ |
| ViewModel      | Zustand Store      |
| Repository     | services/ layer    |
| UI XML/Compose | React Components   |
| Navigation     | React Navigation   |

---

# 17. Final Principle

> “Everything we designed before still applies — only implementation changed.”

Core logic remains identical:

* Passport system
* Cities
* Duels
* Missions
* XP economy
