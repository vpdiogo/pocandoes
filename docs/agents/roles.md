# Engineering Roles

The same agent can assume different roles as the task requires. These instructions do not create processes, accounts, or automatic orchestration. Each delivery needs an owner for integration and final verification.

Before assuming a role with a linked operational profile, read that profile together with the repository and scope instructions. Entries without a profile currently define responsibilities only.

| Role | Responsibility | Expected Evidence |
| --- | --- | --- |
| [Architect](architect.md) | Module boundaries, dependencies, and structural decisions | Implementable recommendation, alternatives and consequences, and an ADR for durable decisions |
| [Backend](backend.md) | Use cases, validation, persistence, and APIs | Implemented behavior, clear contracts, focused tests, and server verification evidence |
| [Frontend](frontend.md) | Pages, composition, state, and accessibility | Working user flows, design-system reuse, verified integration, and browser evidence |
| [Design](design.md) | Tokens, hierarchy, experience, and visual consistency | Implementable flow and visual specifications, states, responsive behavior, and accessibility criteria |
| [QA / Tester](qa.md) | Critical scenarios, regressions, and test strategy | Risk-based scenarios, reproducible findings, distinct verification outcomes, and explicit limits |
| Security | Trust boundaries, secrets, permissions, and dependencies | Concrete risks, audit results, and verified fixes |
| DevOps | Docker, CI, VPS, operations, and recovery | Reproducible commands, readiness checks, and a recovery approach |

Frontend consults Design when introducing a new visual language. Backend consults Architect when changing module boundaries or contracts. QA and Security review the aspects relevant to each change's risk; they are not mandatory formal approvals for every edit. Do not manufacture seven reviews for a simple change.
