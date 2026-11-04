# Project Guidelines — Pocando ES

## Scope and References

The primary agent owns task understanding, coordination, integration, verification, and delivery. Follow session instructions and applicable nested `AGENTS.md` files. Instruction files and role descriptions do not start independent agents.

Read these guides when their conditions apply; their policies are part of the repository instructions:

| When | Required reference |
| --- | --- |
| Planning or implementing a task, delegating, or reviewing work | [Agent workflow](docs/development/workflow.md) |
| Selecting, creating, or triaging issues; starting autonomous work | [Issue policy](docs/development/issues.md) |
| Choosing engineering specializations | [Roles](.agents/agents/roles.md) |
| Creating or updating local specification artifacts | [Spec workspace rules](.agents/specs/.gitkeep.md) |
| Installing or running the project | [README](README.md) and [versions](docs/versions.md) |
| Changing architecture or operations | [Architecture](docs/architecture.md) and [ADRs](docs/adr/README.md) |
| Changing the interface | [Design guidelines](docs/design.md) and `apps/web/src/design-system/AGENTS.md` |
| Reviewing dependencies or security findings | [Security notes](docs/security.md) |

Use the configured versions in manifests, lockfiles, `.nvmrc`, and `collectors/.python-version`; do not assume host defaults match. Consult installed-version documentation before using APIs or configuration. Next.js guides are in `node_modules/next/dist/docs/`, resolving the package from `apps/web`.

AI artifacts live in `.agents/agents/` (operational profiles and role index), `.agents/skills/` (reusable skills), and `.agents/specs/` (ignored, per-spec workspaces). Keep all working artifacts for a specification inside `.agents/specs/<spec-name>/`; only `.agents/specs/.gitkeep.md` is versioned in that directory. Durable product documentation and ADRs remain in `docs/`.

## Product and Architecture

Pocando ES is a cultural agenda and guide for Espírito Santo. It uses Next.js and TypeScript as a modular monolith, PostgreSQL, and independent Python collectors.

- Keep business rules in `apps/web/src/modules`, independent of Next.js and React. Validate input in routes and Server Actions before invoking use cases.
- Keep database access and credentials on the server; UI and design-system components must not access the database directly.
- Derive entities, tables, and ingestion contracts from agreed use cases. Reuse design-system tokens, components, and patterns.
- Start with the smallest implementation that meets the current requirement. Do not add speculative abstractions, services, queues, caches, feature flags, or infrastructure.
- Preserve module boundaries and existing API/WebSocket contracts. Separate deployments require demonstrated need; breaking contracts require explicit authorization. These rules do not require adding WebSockets.
- Record durable architectural decisions in ADRs. Before completing an increment, confirm it preserves the architecture and simplify it when necessary.

## Language and Code

- Write code, identifiers, comments, documentation, commits, logs, and API messages in English. Use Brazilian Portuguese with the owner outside the codebase.
- Brazilian Portuguese in the application belongs in translation resources for the approved localization. Treat older content as migration work: do not translate unrelated files; include necessary migration in the affected task's plan.
- Prefer TypeScript with strict compiler options. Avoid `any`; narrow `unknown` at untrusted boundaries. Use descriptive names, focused functions, and explicit types at module boundaries.
- Prefer `async`/`await`, validate untrusted input at system boundaries (including HTTP and WebSocket payloads), and use tooling for consistent formatting. Prefer platform capabilities and existing dependencies when they solve the problem clearly.
- Prefer clear code over comments. Keep comments brief and use them only for non-obvious constraints, decisions, or external behavior.

## Working Boundaries

- Inspect `git status`, the branch, architecture, and affected files. Preserve existing work and keep changes within the authorized scope.
- Use the existing checkout; each cloud task is isolated. Create worktrees only when explicitly requested.
- Establish the intended outcome and verification approach; state material assumptions and update affected documentation.
- Interactive Mode is the default. Discussion or planning does not authorize implementation. Honor existing approval without asking repeatedly; use the approval rules in the workflow guide.
- Autonomous Mode requires an open GitHub issue labeled `agent-ready`. Follow the issue selection rules, scope limits, and stop conditions in the linked guides.
- Never merge without owner approval. External communication, destructive actions, deployment, release, and publication require applicable authorization. Autonomous work must not merge, close issues, change deployment configuration, or release.
- The primary agent owns integration. Delegate only with authorization, clear scope, file ownership, and required evidence. Follow the workflow's independent-review requirement.

## Quality and Safety

- Test meaningful behavior, boundaries, and regressions. Avoid redundant coverage, arbitrary coverage targets, and tests of trivial implementation details or framework behavior.
- Run relevant existing formatter, type, lint, and targeted test checks. Use the workflow guide for test locations, HTTP/WebSocket QA over TCP, and browser QA. Simulated DOM tests do not replace browser verification.
- Root web commands: `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`. CI also runs `npm audit --audit-level=high`. Do not invent unavailable commands or disable assertions, rules, or gates to pass.
- Keep moderate findings visible in the security notes; the CI threshold does not mean the audit is clean. A collector CLI smoke check does not demonstrate collection, and Compose validation does not demonstrate working services.
- Never expose real secrets, `.env` files, dumps, or personal data in commits, logs, examples, or responses. Inspect credential presence without printing values. Preserve TLS, checksum verification, and environment-provided authentication.
- Follow infrastructure instructions for data safety. Never remove persistent volumes to make startup pass.

## Failures and Delivery

Identify the failing operation and distinguish code defects, missing prerequisites, incompatibility, access denial, and platform failures. Retry only after a relevant correction, state change, or concrete diagnosis. Continue independent work unless an autonomous stop condition requires pausing.

Report confirmed blockers and precise outside actions; do not invent causes or delegate routine checks you can perform. Distinguish local edits, commits, pushes, PRs, remote CI, merges, deployment, and environment publication. Verify each state before claiming it: saving configuration does not prove its application or publication, and publication does not prove restoration in a new task.

Match the requested stage, review the diff, and keep documentation consistent. Report passed, failed, and unrun verification separately. If a required outcome remains pending, describe the delivery as partial, including remaining risks, blockers, and the actual Git or external-service state.
