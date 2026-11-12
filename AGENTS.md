# AGENTS.md

Контекст и правила проекта для агентов (Kimi Code и совместимых инструментов).

## Стек

- Next.js 16 (App Router, сборщик — Turbopack, конфигурация по умолчанию)
- React 19
- TypeScript 5.9, strict-режим (`tsconfig.json`)
- ESLint 9, flat config (`eslint.config.mjs`)
- Tailwind CSS v4 (через PostCSS, конфигурация в `app/globals.css`)
- shadcn/ui (стиль `base-nova`, примитивы — Base UI; добавление компонентов: `npx shadcn@latest add <name>`)

## Команды

- `npm run dev` — dev-сервер (http://localhost:3002)
- `npm run build` — production-сборка
- `npm run start` — запуск собранного приложения
- `npm run lint` — проверка ESLint; отдельные файлы: `npm run lint -- app/`
- `npm run generate:api` — генерация TS-типов из `openapi/openapi.json` в `lib/api/schema.ts`; запускать после обновления спеки

## Структура

- `app/[locale]/` — роуты App Router под сегментом локали (`layout.tsx`, `page.tsx`, `(auth)/`); новая страница = директория с `page.tsx` внутри `app/[locale]/`
- `i18n/` — конфигурация next-intl: `routing.ts` (локали), `request.ts` (загрузка сообщений), `navigation.ts` (типизированные `Link`/`useRouter`/`usePathname`)
- `messages/` — словари переводов `ru.json` и `en.json` (ключи типизированы через `global.d.ts`)
- `middleware.ts` — middleware next-intl (определение локали, редирект на префикс `/ru`, `/en`)
- `components/ui/` — компоненты shadcn/ui (генерируются CLI, не править руками — перегенерировать через `npx shadcn@latest add <name> -o`)
- `lib/utils.ts` — реэкспорт `cn`; общие хелперы
- `openapi/openapi.json` — OpenAPI-спека бекенда `libe-api` (источник для генерации типов)
- `lib/api/schema.ts` — сгенерированные из спеки типы (`openapi-typescript`), не редактировать вручную
- `lib/api/types.ts` — алиасы DTO поверх `schema.ts` (`RegisterDto`, `LoginDto` и т.д.); дополнять при появлении новых схем в спеке
- Алиас импортов: `@/*` → корень проекта (например, `@/components/Button`)
- `.agents/skills/` — project-level скиллы: `next-best-practices`, `nextjs-app-router-patterns`, `typescript-advanced-types`

## Соглашения

- Компоненты по умолчанию — серверные; `'use client'` — только где нужны хуки, события или браузерное состояние
- Все строки UI — только через next-intl (`useTranslations` / `getTranslations`), словари в `messages/ru.json` и `messages/en.json`; при добавлении строки — обновлять оба словаря
- Навигация внутри приложения — через `Link`/`useRouter`/`usePathname` из `@/i18n/navigation` (учитывают текущую локаль), не `next/link` напрямую
- TypeScript строгий: без `any` без необходимости, `as` — только обоснованно, публичные API — с явными возвращаемыми типами
- После изменений кода прогонять `npm run lint` и `npm run build`
- После изменения `openapi/openapi.json` прогонять `npm run generate:api`
- Скиллы из `.agents/skills/` использовать при работе с роутингом, data fetching и типами
- Все зависимости, скилы конфиги и прочее по возможности устанавливать на уровне проекта, а не пользователя
- Коммиты — по Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `build:`; при необходимости с областью в скобках (`feat(app): add dashboard page`); описание — на английском, в повелительном наклонении

## Контекст и ожидающие шаги

- TypeScript зафиксирован на ^5.9: typescript-eslint (внутри eslint-config-next) пока не поддерживает TS 7.0. Когда поддержка выйдет (TS >= 7.1) — обновить: `npm install -D typescript@latest`
- Git remote `origin` подключён: https://github.com/anthonyzhogolev/libe-web.git (HTTPS)
- MCP не настроен. При необходимости подключения серверов (например, `chrome-devtools-mcp` для Lighthouse-аудитов и performance-трейсов) — конфиг писать в `.mcp.json` в корне проекта (закоммичивать в git); управление через `/mcp-config`, статус — `/mcp`. Пример сервера: `{ "command": "npx", "args": ["-y", "chrome-devtools-mcp@latest"] }`
- Направление развития: бекенд на NestJS. Кандидаты: каталог с фильтрами (первый, осваивает SSR/кэширование), затем Lighthouse-монитор с графиками Core Web Vitals и очередями (BullMQ)
- Переводы строк: в репозитории LF, задано через `.gitattributes` (`* text=auto eol=lf`) — предупреждения git о CRLF не должны появляться

## Не делать

- Не коммитить в git без явной просьбы пользователя
- Не добавлять зависимости без согласования с пользователем
- Не редактировать генерируемые файлы: `next-env.d.ts`, содержимое `.next/`
- Не переименовывать ветку `main`
