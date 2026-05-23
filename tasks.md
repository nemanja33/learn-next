# Frontend Learning Tasks — Next.js

---

## Task 7 — Server Components & Route-Level Data Loading

Build a user list and user detail app using Next.js App Router.

**Routes:**
- `/` — redirects to `/users`
- `/users` — user list page
- `/users/[id]` — user detail page

**Requirements:**
- `/users` is an async Server Component that fetches users directly
- Filter input is a Client Component (requires `useState`)
- `/users/[id]` fetches user and posts in parallel with `Promise.all`
- No loading spinner on detail page — data is ready before render
- `loading.tsx` per route for loading skeleton
- `error.tsx` per route for error state
- `layout.tsx` with shared structure and updated metadata
- Service layer in `lib/services` for all fetch logic

**TypeScript:**
- Strictly typed throughout
- `params: Promise<{ id: string }>` — Next.js 15 async params

**Concepts covered:**
Server Components vs Client Components, `"use client"` boundary, async Server Components, `Promise.all` for parallel fetches, `loading.tsx` and `error.tsx` conventions, service layer pattern, `params` as Promise (Next.js 15), fetch-on-render waterfall eliminated, nesting Client inside Server Components
