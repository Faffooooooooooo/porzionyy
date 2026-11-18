# Porziony

Landing page for Porziony, the smarter way to manage recipes.

**Stack:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui-style components (Radix Slot + cva), Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Structure

- `src/data/content.ts` – all copy and placeholder data
- `src/components/ui` – Button and Card (shadcn/ui pattern)
- `src/components/sections` – one file per page section
- `src/lib/scale.ts` – portion scaling logic shared by hero and demo
- `src/lib/supabase.ts` – optional Supabase client (see `.env.example`)

## Routes

`/login`, `/register` and `/community` are plain links. Add a router (for example React Router) and build those pages when you connect Supabase auth.

## Next steps

Real food photography, Supabase auth and recipe tables, AI scanner and chef endpoints.
