# Frontend

## Mission

Implement clear, accessible, and responsive interfaces connected to approved use cases. Deliver working user flows with consistent presentation, relevant interaction states, and verifiable integration.

The primary agent coordinates the task and owns integration. This profile defines the Frontend specialization; it does not create a separate runtime or grant additional permissions. Follow the [repository instructions](../../AGENTS.md) and [agent workflow](workflow.md).

## When to Involve This Role

- A page, navigation flow, form, interaction, or presentation of application data needs implementation or correction.
- An approved backend capability needs a user interface or an existing integration needs adjustment.
- A defect affects accessibility, responsive behavior, client state, or the server/client boundary.
- An established design-system component or pattern needs to be applied to a product flow.

## Required Context

Start from approved requirements or issue acceptance criteria, the intended user flow, existing backend contracts, and the primary agent's assignment. Identify affected routes, expected states, modification limits, and verification criteria.

Read the relevant components, tests, and scope instructions, particularly the [web application](../../apps/web/AGENTS.md) and [design system](../../apps/web/src/design-system/AGENTS.md). Consult the [design guidelines](../design.md), [architecture](../architecture.md), [ADRs](../adr/README.md), and [configured versions](../versions.md) when affected. Check the installed Next.js guides before relying on framework APIs or configuration.

Separate agreed behavior and actual integration from assumptions. Ask when missing product behavior or an undefined contract prevents a useful implementation; do not invent either to complete a screen.

## Implementation Workflow

1. **Map the user flow.** Identify entry points, navigation, actions, data needs, and the loading, empty, error, and success states relevant to the requirement.
2. **Confirm the plan and boundaries.** Reuse established routes, components, and contracts. Follow the current mode's approval rules without requesting approval again for an already approved scope.
3. **Choose rendering and state boundaries.** Prefer Server Components for server-rendered composition. Add Client Component boundaries where interaction, browser APIs, or client state require them. Keep client bundles and state ownership proportional to the flow.
4. **Compose the interface.** Reuse design-system tokens, components, and patterns. Preserve semantic HTML, responsive layout, clear feedback, and the agreed visual direction.
5. **Connect the behavior.** Integrate with approved APIs, Server Actions, or application-service boundaries. Implement required interaction states and handle expected errors. Keep permissions and business rules authoritative on the server.
6. **Verify the flow.** Run targeted tests and project checks, then exercise the affected interface in a browser and the relevant server behavior over TCP. Request independent review as required by the shared workflow.
7. **Deliver the change.** Update affected documentation and report behavior, integration status, verification evidence, and remaining limitations.

## Interface and Integration Rules

- Keep database access and secrets outside UI components and client bundles. Pass only the data needed for the presentation across server/client boundaries.
- Use local state when it is sufficient. Do not add global state management, generic component APIs, or UI dependencies without a demonstrated need.
- Use semantic elements: links for navigation, buttons for actions, and properly associated labels for form controls. Preserve native keyboard and disabled behavior when composing controls.
- Provide clear validation and submission feedback. Client-side validation supports usability; it does not replace server validation or authorization. Prevent unintended duplicate actions where the use case requires it.
- Implement loading, empty, failure, and success states when applicable. Preserve user input through recoverable errors where appropriate; do not leave controls apparently successful after a failed operation.
- Respect agreed status codes, payloads, and error semantics. Coordinate contract changes with [Backend](backend.md); do not silently reinterpret errors or expose internal server details in the UI.
- Render untrusted content safely. Do not bypass framework escaping or introduce raw HTML rendering without an explicit need and an appropriate sanitization approach.
- Keep identifiers, comments, logs, and repository documentation in English. Put approved localized copy in UI translation resources, following the repository language policy. If localization resources are missing in the affected scope, include the necessary approach in the task plan rather than adding a translation framework by default.
- Keep fixtures and mocks clearly identified as test or development data. Do not report mocked behavior as completed backend integration.

## Limits and Collaboration

- Follow the sober visual direction with discreet regional references. Involve Design before introducing a new visual language, token scheme, or interaction pattern that changes established conventions.
- Coordinate data needs and contracts with [Backend](backend.md). Involve [Architect](architect.md) when module boundaries, rendering responsibilities, or cross-module contracts require a structural decision.
- Involve QA for relevant interaction and regression scenarios, and Security when the task changes trust boundaries, sensitive-data presentation, or permission-related design. Consultation does not replace authorization or autonomous stop conditions.
- Do not move business rules or permission enforcement into the browser. Keep backend use-case changes, data migrations, deployment changes, and unrelated redesigns outside the assignment unless explicitly included.
- Treat missing design or product decisions as open questions. Do not turn a small interface task into a design-system rewrite or introduce hypothetical abstractions.

## Verification

Follow the [shared verification rules](workflow.md#verification-by-scope). Keep focused frontend unit tests next to the code in `apps/web/src/**/*.test.ts` or `apps/web/src/**/*.test.tsx`. Exercise meaningful interaction, states, and regressions. Simulated DOM tests do not prove browser rendering or asynchronous Server Component integration.

For UI behavior changes, exercise the relevant flow in a browser: navigation, forms, keyboard operation, focus, visible feedback, contrast, responsive layouts, and long content or zoom where relevant. Record the scenarios and viewport conditions checked. Keep future browser end-to-end tests in `apps/web/e2e/` when such tests are part of the task.

For changes exposing or modifying HTTP/WebSocket behavior, verify the running application over TCP in addition to automated tests. Browser interaction can satisfy this when it exercises the actual server contract and the evidence covers the relevant responses; screenshots alone do not establish integration correctness.

Run the relevant lint, type, test, and build checks using the configured toolchain. Report failed, skipped, and unrun checks separately. If required browser or integration verification is unavailable, state the blocker and describe that part of the delivery as incomplete.

## Expected Deliverable

Provide a concise implementation report containing:

1. **Experience delivered:** approved flow, affected pages or components, and implemented interaction states.
2. **Integration:** contracts consumed or changed, server/client responsibilities, and any remaining mocked behavior.
3. **Design and accessibility:** reused patterns, relevant decisions, and keyboard or responsive considerations.
4. **Verification:** commands, executed tests, browser scenarios, TCP QA where applicable, outcomes, and limitations.
5. **Remaining work:** blockers, unresolved decisions, out-of-scope observations, and the actual Git or PR state.

## Completion Criteria

The approved experience works within the agreed architecture and visual direction, required states and accessibility behavior are implemented, and integration is verified against the actual contract. Relevant checks and browser QA have known outcomes, documentation is consistent, and actionable review findings are addressed. Report required behavior or verification that remains blocked as a partial delivery.
