# Project Rules — Korea Passport

## Document Information

| Field        | Value                          |
| ------------ | ------------------------------ |
| Version      | 1.0.0                          |
| Status       | Active                         |
| Authors      | Muhammadrizo Shokirov, ChatGPT |
| Last Updated | 2026-06-18                     |

---

# 1. Purpose of This Document

Этот документ фиксирует **неизменяемые правила проекта Korea Passport**.

Он защищает:

* архитектуру
* баланс игры
* структуру данных
* пользовательский опыт

Любое изменение этих правил требует пересмотра всей системы.

---

# 2. Core Product Identity Rule

## 2.1 Definition

Korea Passport — это:

> образовательная геймифицированная система, где изучение языка представлено как путешествие.

---

## 2.2 Strict Rule

❗ НЕЛЬЗЯ превращать продукт в:

* обычный учебник
* просто чат-бот для изучения языка
* просто тестовое приложение
* социальную сеть без обучения

---

# 3. Architecture Stability Rules

## 3.1 Firebase Structure Rule

❗ Запрещено менять структуру:

* `users`
* `user_passports`
* `cities`
* `lessons`
* `missions`
* `duels`

без обновления:

* DatabaseDesign.md
* TechnicalArchitecture.md

---

## 3.2 Data Ownership Rule

| Data Type         | Owner       |
| ----------------- | ----------- |
| XP / Level        | System only |
| Passport progress | System only |
| Duel results      | System only |
| User profile      | User        |

---

## 3.3 No Direct Client Trust Rule

❗ Клиентское приложение НЕ имеет права:

* начислять XP напрямую без логики системы
* открывать города вручную
* изменять результаты дуэлей
* редактировать паспорт напрямую

---

# 4. Game Balance Rules

## 4.1 Progression Rule

* один город = этап обучения
* нельзя пропускать города
* прогресс линейный

---

## 4.2 XP Rule

* XP должен быть “ощутимым”, но не бесконтрольным
* XP всегда связан с действием:

  * lesson
  * mission
  * duel

---

## 4.3 Reward Rule

❗ Награды не должны ломать баланс:

* Coins = косметика
* XP = прогресс
* Stamps = коллекция

---

# 5. Word Duel Rules

## 5.1 Fairness Rule

* все игроки получают одинаковые вопросы
* порядок фиксируется на момент старта
* нельзя менять вопросы во время матча

---

## 5.2 Anti-Cheat Rule

❗ Запрещено:

* менять ответы после отправки
* пересоздавать матч для получения преимуществ
* локально подменять результат без синка

---

## 5.3 Loss Protection Rule

* проигрыш НЕ должен наказывать игрока
* всегда есть минимальный XP

---

# 6. UX / Product Rules

## 6.1 Progress Visibility Rule

Пользователь всегда должен видеть:

* текущий город
* следующий шаг
* прогресс визы

---

## 6.2 No Dead End Rule

❗ В приложении не должно быть экранов без действия:

Каждый экран обязан иметь:

* continue
* retry
* next step
* back to progression

---

## 6.3 Fast Entry Rule

Пользователь должен попасть в обучение:

> максимум за 2 клика после входа

---

# 7. Development Rules

## 7.1 Modular Rule

Код должен быть разделён:

* auth
* passport
* learning
* duel
* profile

---

## 7.2 Service Layer Rule

❗ Запрещено:

* прямые вызовы Firebase из UI компонентов

✔ Только через:

* services/
* repositories/

---

## 7.3 State Rule

* глобальное состояние = Zustand store
* локальное состояние = компонент

---

# 8. Scalability Rules

## 8.1 Future Expansion Rule

Система должна поддерживать:

* новые языки
* новые центры
* новые города
* новые режимы дуэлей

---

## 8.2 Backward Compatibility Rule

❗ Любое изменение структуры данных не должно ломать:

* старых пользователей
* старые города
* старые дуэли

---

# 9. Performance Rules

* минимизировать Firestore reads
* использовать кеширование уроков
* lazy loading экранов
* Realtime DB только для дуэлей

---

# 10. Security Rules

* Firebase Auth обязателен для всех операций
* пользователь может изменять только свой профиль
* критические операции проходят через систему (not client)

---

# 11. Final Rule (Most Important)

> Если изменение ломает Vision или Core Loop — оно запрещено без пересмотра всей документации.

---

# 12. Definition of Done (Rules Layer)

Документ считается завершённым, если:

* защищены все ключевые системы
* определены запреты
* описаны роли данных
* установлены UX ограничения
* предотвращён архитектурный хаос
