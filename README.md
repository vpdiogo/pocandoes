# Pocando ES

Agenda e guia cultural do Espírito Santo. A aplicação usa Next.js e PostgreSQL; os coletores são um projeto Python independente.

## Executar com Docker

Requisitos: Docker com Compose v2. Copie `.env.example` para `.env` e altere `POSTGRES_PASSWORD`. Execute:

```sh
cp .env.example .env
docker compose up -d --build
```

A aplicação fica em http://localhost:3000 e o PostgreSQL em `localhost:5432`. As duas portas ficam acessíveis apenas no próprio host. Para encerrar sem remover os dados: `docker compose down`. Os dados persistem no volume `postgres18_data`.

## Desenvolver sem contêiner para o Next.js

Requisitos: Node.js 26.13 e npm; para o banco, Docker Compose. Inicie apenas o banco com `docker compose up -d db`, instale as dependências com `npm ci` e execute `npm run dev`. Para conectar o Next ao banco, crie `apps/web/.env.local` com `DATABASE_URL` baseado no exemplo, usando a mesma senha do `.env`. Caracteres especiais na URL devem ser codificados como URL.

Os coletores Python requerem Python 3.15+. Instale com `python -m pip install -e ./collectors` e execute `pocandoes-collector`.

## Verificações

Execute `npm run lint`, `npm run typecheck` e `npm run build`. `docker compose config` valida a configuração. As instruções para VPS, backup e restauração estão em [docs/architecture.md](docs/architecture.md). A modelagem de domínio, contratos de ingestão e coletores funcionais serão definidos posteriormente.

A política de versões e as versões verificadas estão em [docs/versions.md](docs/versions.md). A imagem de desenvolvimento Python pode ser selecionada com `collectors/.python-version`; esse arquivo não instala o interpretador automaticamente.

## Agent-assisted development and interface

Start with [AGENTS.md](AGENTS.md). AI artifacts are organized in `.agents/agents/` (operational profiles and guides), `.agents/skills/` (reusable skills), and `.agents/specs/` (local specification workspaces).

Read the [engineering roles](.agents/agents/roles.md) for responsibilities and the [spec workspace rules](.agents/specs/gitkeep.md) before creating a specification folder. All working artifacts for a spec belong in `.agents/specs/<spec-name>/` and are ignored by Git; only the directory instructions are versioned. For autonomous work, the associated GitHub issue remains the source of authorization, acceptance criteria, priority, and issue state. Interactive work may be authorized by the owner without an issue, following the shared workflow.

Durable architectural decisions remain in [docs/adr](docs/adr/README.md); [design guidelines](docs/design.md) describe the internal design system. `npm test` runs component tests once, including in CI. CI also runs `npm audit --audit-level=high`: high and critical findings block it; known moderate findings remain documented in [docs/security.md](docs/security.md).
