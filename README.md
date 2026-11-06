# Pocando ES

A cultural agenda and guide for Espírito Santo. The application uses Next.js and PostgreSQL; collectors are an independent Python project.

## Publish the Coming-soon Page

The static page for `pocandoes.com.br` has its own Caddy deployment with automatic HTTPS. Follow the [coming-soon guide](docs/coming-soon.md) for DNS, publication, updates, and verification. Once DNS points to the VPS and ports 80 and 443 are available, run `docker compose -f compose.coming-soon.yaml up -d --build` from the repository root.

## Run with Docker

Requirements: Docker with Compose v2. Copy `.env.example` to `.env` and set `POSTGRES_PASSWORD` before starting:

```sh
cp .env.example .env
docker compose up -d --build
```

The application is available at http://localhost:3000 and PostgreSQL at `localhost:5432`. Both ports are accessible only from the host. Stop services without removing data with `docker compose down`. Data persists in the `postgres18_data` volume.

## Develop Next.js Outside Docker

Requirements: Node.js 26.13 and npm; Docker Compose for the database. Start only the database with `docker compose up -d db`, install dependencies with `npm ci`, and run `npm run dev`. To connect Next.js to the database, create `apps/web/.env.local` with `DATABASE_URL` based on the example, using the same password as `.env`. URL-encode special characters in the password.

Python collectors require Python 3.15+. Install with `python -m pip install -e ./collectors` and run `pocandoes-collector`.

## Verification

Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`. `docker compose config` validates configuration. VPS, backup, and restoration instructions are in [docs/architecture.md](docs/architecture.md). Domain modeling, ingestion contracts, and functional collectors will be defined later.

The version policy and verified versions are in [docs/versions.md](docs/versions.md). `collectors/.python-version` selects the Python version for compatible tooling; it does not install the interpreter automatically.

## Interface Language

The platform UX/UI remains in Brazilian Portuguese. Its copy is centralized in `apps/web/src/locales/pt-BR.json` and `apps/coming-soon/locales/pt-BR.json`; source identifiers, comments, logs, and repository documentation use English. Do not translate interface copy when maintaining English repository content.

## Agent-assisted development and interface

Start with [AGENTS.md](AGENTS.md). AI artifacts are organized in `.agents/agents/` (operational profiles and role index), `.agents/skills/` (reusable skills), and `.agents/specs/` (local specification workspaces).

Read the [engineering roles](.agents/agents/roles.md) for responsibilities and the [spec workspace rules](.agents/specs/.gitkeep.md) before creating a specification folder. All working artifacts for a spec belong in `.agents/specs/<spec-name>/` and are ignored by Git; only the directory instructions are versioned. For autonomous work, the associated GitHub issue remains the source of authorization, acceptance criteria, priority, and issue state. Interactive work may be authorized by the owner without an issue, following the shared workflow.

Development procedures are documented in the [workflow guide](docs/development/workflow.md) and [issue policy](docs/development/issues.md).

Durable architectural decisions remain in [docs/adr](docs/adr/README.md); [design guidelines](docs/design.md) describe the internal design system. `npm test` runs component tests once, including in CI. CI also runs `npm audit --audit-level=high`: high and critical findings block it; known moderate findings remain documented in [docs/security.md](docs/security.md).
