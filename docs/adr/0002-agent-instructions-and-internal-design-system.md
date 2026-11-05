# 0002 — Scoped Agent Instructions and an Internal Design System

Status: accepted. The scoped agent-instruction placement is superseded by [0003 — Centralized Agent Instructions](0003-centralized-agent-instructions.md); the design-system decision remains in effect.

## Context

Agent-assisted development needs consistent conventions. The public interface needs visual patterns that can evolve without duplicated styles.

## Decision

Use AGENTS.md at the root and in relevant scopes, with documented roles and CI verification. Keep the design system inside the application, using semantic CSS tokens, CSS Modules, and React components. Migrate the initial page to these patterns.

## Alternatives

Multi-agent orchestration and an independent visual package have no demonstrated need at this stage. Tailwind and shadcn/ui remain future options, subject to concrete benefit and an explicit adoption decision; the current implementation uses native CSS.

## Consequences

Roles do not start agents automatically. Instructions supplement session instructions and do not expand permissions. CI includes component behavior tests and an audit gate for high-severity findings; known moderate findings remain visible. The agreed visual direction is sober with discreet regional references; identity will evolve with the product. The design system should grow from real flows.
