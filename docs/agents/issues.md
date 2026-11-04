# Issue Policy

Read this guide before selecting, creating, or triaging issues, or starting autonomous implementation. Follow the [repository instructions](../../AGENTS.md) and the [workflow guide](workflow.md).

## Selection and Scope

Autonomous implementation requires an open issue labeled `agent-ready`. If multiple eligible issues exist, select only the highest-priority one. If priority is unclear, stop and request owner input.

The issue acceptance criteria are the authorization boundary. Recheck that the selected issue remains open and `agent-ready` before taking further autonomous actions after a change in issue state becomes known. Follow all autonomous stop conditions in the workflow guide.

Do not create follow-up issues without explicit authorization. Record useful out-of-scope observations in the pull request instead of implementing them.

## Label Taxonomy

When authorized to create or triage issues, use labels as independent dimensions:

| Dimension | Required labels |
| --- | --- |
| Type | Exactly one: `type:feature`, `type:bug`, `type:hotfix`, or `type:chore` |
| Area | One or more: `area:frontend`, `area:backend`, `area:ux-ui`, `area:realtime`, `area:platform`, or `area:documentation` |
| Workflow | Exactly one: `interactive`, `needs-design`, `agent-ready`, or `blocked` |
| Priority | Exactly one: `priority:high`, `priority:medium`, or `priority:low` |

A `type:hotfix` issue must always be `interactive` and `priority:high`; it must never be labeled `agent-ready`.

These are classification rules, not authorization to create issues or configure labels remotely. Autonomous work must not close issues.
