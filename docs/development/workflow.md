# Agent Workflow

Read this guide before planning or implementing tasks, delegating, or reviewing work. It supplements the [repository instructions](../../AGENTS.md). For issue selection and labels, also read the [issue policy](issues.md).

## Modes and Approval

Interactive Mode is the default. Autonomous Mode is available only for an open GitHub issue explicitly labeled `agent-ready`; neither a role nor a chat request substitutes for the label.

Respect the requested stage: discussion, learning, architecture exploration, and planning deliver their requested artifacts. They are not approval to implement. In Interactive Mode, present an implementation plan and obtain owner approval before changing code. Honor explicit approval already given for the agreed plan or scope; do not add another approval step for the same work. Ask when a necessary decision remains ambiguous. In Autonomous Mode, the eligible issue supplies authorization as described below.

## Interactive Implementation

1. Read the owner's request, the issue when one exists, and linked context. Inspect the architecture, relevant code, branch, and existing changes.
2. Present the implementation plan and wait for approval unless the relevant plan or scope is already approved.
3. Implement the approved plan on a dedicated branch, preserving existing work and keeping changes proportional to the task.
4. Run focused tests, relevant project checks, and required TCP or browser QA described below.
5. Commit the change and open a pull request.
6. Request an independent code review from another agent.
7. Apply actionable findings within scope, rerun affected verification, and report the result.
8. Never merge without owner approval.

## Autonomous Implementation

An open `agent-ready` issue authorizes one autonomous implementation within its acceptance criteria.

1. Read the complete issue, acceptance criteria, labels, and linked context. Select the issue using the issue policy.
2. Inspect the relevant architecture and code.
3. Create a concise implementation plan and record it in the pull request.
4. Implement only the issue scope.
5. Run relevant tests, project checks, and required TCP or browser QA.
6. Commit on a dedicated branch and open a pull request referencing the issue.
7. Request an independent code review from another agent.
8. Apply actionable findings that remain within the issue scope.
9. Rerun affected verification and leave the pull request ready for human review.

Never merge, close an issue, modify deployment configuration, or release autonomously.

### Stop Conditions

Stop autonomous work and request owner input when:

- Acceptance criteria are ambiguous, incomplete, or contradictory.
- A breaking API, database, or WebSocket contract change is required.
- A new external dependency, paid service, or infrastructure component is required.
- A database migration is destructive, irreversible, or changes production data.
- Authentication, authorization, secrets, permissions, or other security boundaries need design changes.
- The work materially exceeds the issue scope.
- Existing checks reveal an unrelated regression.
- Independent review identifies an architectural concern rather than a localized fix.
- The issue is no longer open or no longer labeled `agent-ready`.

The acceptance criteria are the authorization boundary. Do not perform unrelated refactors or cleanup. Record useful out-of-scope observations in the pull request instead of implementing them. Do not create follow-up issues unless explicitly authorized.

## Delegation and Independent Review

The primary agent owns integration and final delivery. Select only useful specializations from [roles.md](../../.agents/agents/roles.md); do not manufacture seven reviews or approvals for a simple task.

For each authorized delegation, specify the objective, acceptance criteria, required context, modification limits, file ownership, dependencies, expected deliverable, and verification evidence. Parallel work must have independent scopes and an integration owner; avoid concurrent writes to the same files.

Independent review is required in both implementation workflows. Review the actual diff and evidence, resolve findings within scope, and validate the integrated result. An agent's success statement is not evidence by itself. If independent review is unavailable, disclose the limitation rather than presenting self-review as independent approval.

## Verification by Scope

- After each implementation increment, run the relevant formatter, type checker, linter, and targeted tests when they exist. Do not invent a formatter command when none is configured.
- For increments exposing or changing HTTP/WebSocket behavior, perform end-to-end QA over TCP against the running server in addition to automated tests. Check the relevant status, payload, and behavior; exercise WebSocket connection and messages when applicable.
- For UI changes, check keyboard operation, focus, contrast, and responsiveness. Simulated DOM tests do not replace browser QA. Report checks that could not be performed.
- Documentation-only changes require review of content, references, and the diff; do not run the entire application by routine.
- For Python collectors and infrastructure, follow their scope instructions. Do not present a CLI startup or configuration validation as functional end-to-end verification.

### Test Locations

| Kind | Location |
| --- | --- |
| Backend integration tests for application, database, HTTP, or WebSocket contracts | `test/` |
| Frontend unit tests | Next to the covered code in `apps/web/src/**/*.test.ts` or `apps/web/src/**/*.test.tsx` |
| Future browser end-to-end tests | `apps/web/e2e/` |
| Python collector tests | Follow `collectors/AGENTS.md` |

Do not create empty suites just to populate these locations. Favor focused behavioral tests and regressions over broad or redundant coverage. Report passed checks, failed checks, checks not run, and remaining limitations separately.
