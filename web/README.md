## GopherSocial Web

Brutalist social surface for the Go backend that lives in the repo root. Built with React 19, TanStack Start, TanStack Router/Query, and shadcn primitives so we get server-friendly routing with modern UI blocks.

### Getting started

```bash
cd web
pnpm install
pnpm dev
```

The UI assumes your Go API exposes REST endpoints under `/v1`. By default we target `http://localhost:8080/v1`, but you can override that with:

```bash
VITE_API_BASE_URL="https://api.yourdomain.com/v1" pnpm dev
```

Every fetch call has graceful fallback data (`src/data/demo-social.ts`) so the interface still renders if the backend is offline.

### Scripts

| command      | description                                              |
| ------------ | -------------------------------------------------------- |
| `pnpm dev`   | Start Vite + TanStack Start in development mode.         |
| `pnpm build` | Production build (Nitro server bundle + client assets).  |
| `pnpm serve` | Preview the production bundle locally.                   |
| `pnpm lint`  | ESLint over `src/**/*.{ts,tsx}` with TanStack rules.     |
| `pnpm test`  | Vitest placeholder suite.                                |
| `pnpm check` | Opinionated prettier + eslint fix pass.                  |

### Architecture highlights

- `src/components/layout/AppShell.tsx`: global header, brutalist chrome, theme toggle.
- `src/routes/index.tsx`: main social feed that wires together composer, feed, insights, and trends.
- `src/hooks/useSocialData.ts`: canonical TanStack Query hooks for posts, trends, activity, profile, and mutations.
- `src/lib/api.ts`: fetch helpers + backend integration (extend here when new endpoints land).
- `src/components/ui/*`: shadcn-inspired primitives (Button, Card, Badge, etc.) customized for the visual system.
- `src/components/social/*`: feature-level blocks (FeedComposer, FeedList, TrendPanel, ActivityRail, etc.).

### Styling & theming

Tailwind CSS 4 powers utilities, with custom tokens defined in `src/styles.css`. The brutalist palette uses Space Grotesk, high-contrast borders, and thick shadows. Keep any new primitives aligned with those tokens and reuse the helper class `.brutalist-card` when possible.

### Extending the backend contract

All REST calls funnel through `src/lib/api.ts`. Add new helpers there (e.g. `likePost`, `fetchNotifications`) and expose them via the query hooks. Each helper should return realistic fallback data so the UI never hard-crashes when an endpoint is missing.

### shadcn components

If you want to scaffold more primitives from shadcn:

```bash
pnpx shadcn@latest add <component-name>
```

Then drop the generated file into `src/components/ui` and adapt the styling to match the brutalist system.

### Development tips

- TanStack Start auto-generates the route tree. Run `pnpm dev` once after adding/removing route files so `routeTree.gen` stays fresh.
- Query devtools + router devtools are already embedded (see `src/routes/__root.tsx`). Toggle them from the UI when debugging.
- The feed composer posts to `/v1/posts`. If your backend auth differs, adjust `CreatePostPayload` + composer copy to match.

Ship bold drops ✶

