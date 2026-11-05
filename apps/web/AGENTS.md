# Web Application

Follow the repository instructions. `src/app` contains Next.js routes, layouts, and entry points. `src/modules` contains business modules. `src/server` contains server-only infrastructure. `src/design-system` contains shared tokens, components, and visual patterns.

Use Server Components by default; introduce a client boundary when browser state or interaction requires it. Never import the database or secret environment variables into client code. Handlers validate input and delegate use cases. UI components do not query the database.

Before changing Next.js APIs or configuration, read the relevant guide in `node_modules/next/dist/docs/`, resolving the package from this directory. Use existing tests and add behavioral scenarios when changing interactive components. Asynchronous Server Component tests require an integration or browser strategy, because Vitest does not validate them directly.
