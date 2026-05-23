# Learning Notes — Next.js

---

## Task 7 — Server Components & Route-Level Data Loading

### Questions & Answers

**What is the difference between a Server Component and a Client Component?**
My answer: both technically render on the server, the difference is that client components hydrate on the client. Hooks and event handlers are handled on the client side. Client components need a "use client" directive. Server components can handle code on the server, so they can handle fetching data out of the box.
Correction: Mostly correct. Key addition: Server Components don't hydrate at all — they send static HTML that's never interactive. Client Components render on the server for the initial HTML, then hydrate to become interactive. Server Components can also access server-only resources (env vars, databases, file system) without leaking them to the browser.

**Why can a Server Component be async but a Client Component cannot?**
My answer: async components return a promise and Next handles that. Client components return JSX always.
Correction: Right direction. Deeper reason: Server Components execute on the server as part of the rendering pipeline — Node.js can await Promises naturally. Client Components must return JSX synchronously because React's browser reconciler can't await — it needs to schedule work immediately.

**Where exactly does the fetch-on-render waterfall disappear?**
My answer: Next server components fetch data on the server asynchronously and render when all is ready.
Correction: More precisely — with Server Components, data is awaited before the JSX is returned. There's no render → fetch → re-render cycle. The component renders exactly once, with data already in hand.

**The filter input needs useState — but the page is a Server Component. How do you mix the two?**
My answer: you can nest client components inside server ones. Next looks for the "use client" directive at the start of the file.
Correction: Correct. Worth adding: you can also pass Server Components as children/props to Client Components. What you cannot do is import a Server Component inside a Client Component file — it gets pulled into the client bundle.

### Concepts Covered

- **Server Components vs Client Components** — Server Components run only on the server, can be async, access server resources, never hydrate; Client Components run on server for initial HTML then hydrate in the browser, can use hooks and event handlers
- **"use client" boundary** — marks the file as the entry point to the client bundle; all imports from that file are treated as client-side
- **Async Server Components** — await data directly in the component body; renders once with data ready, no loading state needed on the client
- **Promise.all for parallel fetches** — pass bare Promises, not awaited values; await inside the array makes fetches sequential, defeating the purpose
- **loading.tsx and error.tsx** — Next.js App Router conventions; automatically wrap the nearest page.tsx with Suspense and Error Boundary behaviour
- **Service layer** — isolate fetch logic from components; components call service functions, not raw fetch
- **params as Promise** — Next.js 15 changed params to be async; always await params before accessing values
- **Fetch-on-render waterfall eliminated** — data is fetched before the component renders, not triggered by it
- **Nesting Client inside Server** — valid pattern; pass data down as props from Server to Client Component
