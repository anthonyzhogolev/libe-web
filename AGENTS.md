# AGENTS.md

Контекст и правила проекта для агентов (Kimi Code и совместимых инструментов).

## Стек

- Next.js 16 (App Router, сборщик — Turbopack, конфигурация по умолчанию)
- React 19
- TypeScript 5.9, strict-режим (`tsconfig.json`)
- ESLint 9, flat config (`eslint.config.mjs`)

## Команды

- `npm run dev` — dev-сервер (http://localhost:3000)
- `npm run build` — production-сборка
- `npm run start` — запуск собранного приложения
- `npm run lint` — проверка ESLint; отдельные файлы: `npm run lint -- app/`

## Структура

- `app/` — роуты App Router (`layout.tsx`, `page.tsx`); новая страница = директория с `page.tsx`
- Алиас импортов: `@/*` → корень проекта (например, `@/components/Button`)
- `.agents/skills/` — project-level скиллы: `next-best-practices`, `nextjs-app-router-patterns`, `typescript-advanced-types`

## Соглашения

- Компоненты по умолчанию — серверные; `'use client'` — только где нужны хуки, события или браузерное состояние
- TypeScript строгий: без `any` без необходимости, `as` — только обоснованно, публичные API — с явными возвращаемыми типами
- После изменений кода прогонять `npm run lint` и `npm run build`
- Скиллы из `.agents/skills/` использовать при работе с роутингом, data fetching и типами

## Не делать

- Не коммитить в git без явной просьбы пользователя
- Не добавлять зависимости без согласования с пользователем
- Не редактировать генерируемые файлы: `next-env.d.ts`, содержимое `.next/`
- Не переименовывать ветку `main`
