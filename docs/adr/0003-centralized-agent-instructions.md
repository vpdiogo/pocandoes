# 0003 — Centralized Agent Instructions

Status: accepted. Supersedes the agent-instruction placement in [0002](0002-agent-instructions-and-internal-design-system.md).

## Context

Nested instruction files duplicate guidance already covered by the repository guide, operational role profiles, and technical documentation. Maintaining them adds navigation and consistency work without a current need for separate scope policies.

## Decision

Keep only the root `AGENTS.md` as the repository instruction entry point. Retain the seven operational profiles and role index in `.agents/agents/`. Keep workflow and issue policies in `docs/development/` and technical guidance in the existing architecture and design documentation. Remove nested `AGENTS.md` files and update their references, preserving useful rules in those existing guides.

## Alternatives

Keeping nested files would preserve automatic scope discovery but also maintain duplicated instructions. Replacing them with another layer of per-directory instruction files would retain the same maintenance burden.

## Consequences

The root guide directs agents to the profiles and documentation relevant to their task. Role profiles remain specializations rather than automatic processes. No runtime behavior or existing design-system decision changes.
