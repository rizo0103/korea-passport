# Information Architecture & App Screen Map — Korea Passport

## Document Information

| Field        | Value                           |
| ------------ | ------------------------------- |
| Version      | 1.0.0                           |
| Status       | Approved                        |
| Author       | Muhammadrizo Shokirov & ChatGPT |
| Last Updated | 2026-06-18                      |

---

# 1. Overview

Information Architecture описывает структуру приложения Korea Passport, включая все экраны, их иерархию и связи между ними.

Цель: обеспечить понятную навигацию и логичный пользовательский поток без перегрузки интерфейса.

---

# 2. App Structure Overview

Приложение делится на 5 основных модулей:

1. Authentication
2. Home (Passport Hub)
3. Learning System
4. Game System (Word Duel)
5. Progress System (Passport)

---

# 3. Screen Map (High-Level)

```text id="iascreen1"
Splash Screen
↓
Auth Flow
   ├── Login
   └── Register
↓
Main App Shell
   ├── Home (Passport)
   ├── Cities
   ├── Learn
   ├── Word Duel
   ├── Leaderboard
   └── Profile
```

---

# 4. Navigation Model

## 4.1 Navigation Type

* Bottom Navigation (primary)
* Stack Navigation (inside modules)
* Modal screens (duels, rewards, popups)

---

## 4.2 Bottom Navigation Tabs

### 1. Home (Passport)

Главный экран прогресса

### 2. Cities

Список и карта городов

### 3. Learn

Уроки и практика

### 4. Duel

Word Duel система

### 5. Profile

Паспорт, настройки, достижения

---

# 5. Screen Details

---

## 5.1 Splash Screen

### Purpose:

* загрузка приложения
* проверка авторизации

### Redirects:

* logged in → Home
* not logged in → Auth

---

## 5.2 Auth Screens

### Login Screen

* email
* password
* login button

### Register Screen

* username
* email
* password
* confirm password

---

## 5.3 Home (Passport Hub)

### Purpose:

Главный экран прогресса пользователя

### Contains:

* текущий City
* прогресс Visa
* XP level
* Daily Challenge
* quick access buttons

### Key Action:

→ Continue Journey

---

## 5.4 Cities Screen

### Purpose:

Выбор и просмотр городов

### Features:

* locked / unlocked cities
* progress per city
* requirements for Visa

### Navigation:

City → City Detail

---

## 5.5 City Detail Screen

### Contains:

* lessons list
* missions list
* practice section
* city progress bar

### Actions:

* start lesson
* start mission
* enter practice

---

## 5.6 Learn Screen

### Purpose:

Обучение языку

### Subsections:

* Vocabulary
* Grammar
* Dialogues

### Flow:

Lesson → Practice → Mission

---

## 5.7 Word Duel Screen

### Purpose:

Соревновательная система

### Modes:

* quick match
* friend match
* center match

### Flow:

Matchmaking → Game → Results → Rewards

---

## 5.8 Duel Game Screen

### UI Elements:

* question area
* timer
* answer options
* score tracker

---

## 5.9 Leaderboard Screen

### Types:

* global ranking
* center ranking
* duel ranking

---

## 5.10 Profile (Passport Screen)

### Contains:

* passport visualization
* stamps collection
* achievements
* level
* coins
* settings

---

## 5.11 Reward Screen (Modal)

Shown after:

* lesson
* duel
* mission

### Contains:

* XP gained
* Coins
* Stamps unlocked
* Progress updates

---

# 6. Navigation Flow (Core User Journey)

```text id="iaflow1"
Login
↓
Home (Passport)
↓
Daily Challenge
↓
City Selection
↓
Lesson
↓
Practice
↓
Mission
↓
Word Duel
↓
Reward Screen
↓
Return to Home
```

---

# 7. UX Principles

## 7.1 One Clear Action Rule

Каждый экран должен иметь **одну основную цель**.

---

## 7.2 Always Show Progress

Пользователь всегда должен видеть:

* где он сейчас
* куда идёт
* сколько осталось

---

## 7.3 No Dead Ends

Нет экранов без действия.

Всегда есть:

* continue
* retry
* next step

---

## 7.4 Fast Entry Principle

Пользователь должен попасть в обучение за ≤ 2 клика после открытия приложения.

---

# 8. Screen Hierarchy Rules

* Home = root hub
* Cities = progression map
* Learn = education engine
* Duel = competition engine
* Profile = identity layer

---

# 9. Component Reusability

Повторно используемые UI элементы:

* XP bar
* Visa progress bar
* City cards
* Stamp cards
* Duel timer
* Reward modal

---

# 10. Future Expansion Ready

Архитектура экранов поддерживает:

* новые города
* новые языки
* новые режимы дуэлей
* сезонные события
* center-based customization

---

# 11. Definition of Done (IA)

Information Architecture считается завершённой, если:

* все экраны определены
* все переходы описаны
* нет “висящих” экранов
* каждый экран имеет цель
* нет дублирующих функций
