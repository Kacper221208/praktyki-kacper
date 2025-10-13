
# Vite + NestJS (Multipage Vanilla)

Monorepo (npm workspaces):
- `frontend/` – Vite 5 multipage + SCSS
- `backend/` – NestJS 10 (minimal)

## Start (jeden skrypt)
```bash
npm install
npm run dev
```
- Frontend: http://localhost:5173/ (proxy `/api` → backend)
- Backend:  http://localhost:3000/api/hello

## Build produkcyjny
```bash
npm run build
```

## Struktura
```
frontend/
  src/ (w tym: index.html, strona/, o-nas/, kontakt/)
  vite.config.js (proxy /api → 3000)
backend/
  src/main.ts, app.module.ts, modules/app.controller.ts
  tsconfig*.json
package.json (root) – workspaces + concurrently
```
