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
- Все зависимости, скилы конфиги и прочее по возможности устанавливать на уровне проекта, а не пользователя
- Коммиты — по Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `build:`; при необходимости с областью в скобках (`feat(app): add dashboard page`); описание — на английском, в повелительном наклонении

## Контекст и ожидающие шаги

- TypeScript зафиксирован на ^5.9: typescript-eslint (внутри eslint-config-next) пока не поддерживает TS 7.0. Когда поддержка выйдет (TS >= 7.1) — обновить: `npm install -D typescript@latest`
- Переименование проекта в `libe-web` (в процессе): имена обновлены в `package.json` и `package-lock.json`, но не закоммичены. Папку `learn-project-next` нужно переименовать в `libe-web` вручную при закрытой сессии Kimi Code, затем открыть проект по новому пути и закоммитить (`chore: rename project to libe-web`)
- Git remote не подключён. После создания репозитория на GitHub: `git remote add origin git@github.com:<user>/libe-web.git`, затем `git push -u origin main`
- MCP не настроен. При необходимости подключения серверов (например, `chrome-devtools-mcp` для Lighthouse-аудитов и performance-трейсов) — конфиг писать в `.kimi-code/mcp.json` (проектный) или `~/.kimi-code/mcp.json` (глобальный); управление через `/mcp-config`, статус — `/mcp`. Пример сервера: `{ "command": "npx", "args": ["-y", "chrome-devtools-mcp@latest"] }`
- Направление развития: бекенд на NestJS. Кандидаты: каталог с фильтрами (первый, осваивает SSR/кэширование), затем Lighthouse-монитор с графиками Core Web Vitals и очередями (BullMQ)
- Предупреждения git «LF will be replaced by CRLF» — штатны для Windows, не ошибка. Убрать можно через `.gitattributes` с `* text=auto eol=lf` и `git add --renormalize .`

## Не делать

- Не коммитить в git без явной просьбы пользователя
- Не добавлять зависимости без согласования с пользователем
- Не редактировать генерируемые файлы: `next-env.d.ts`, содержимое `.next/`
- Не переименовывать ветку `main`
