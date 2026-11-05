# 0001 — Modular Monolith with Independent Collectors

Status: accepted.

## Context

Pocando ES needs indexable public pages, organized business rules, and collection from cultural sources. The initial priority is maintainable code with low operational cost.

## Decision

Use full-stack Next.js with framework-independent business modules, PostgreSQL, and separate Python collectors. The initial deployment approach is a VPS with Docker Compose and Cloudflare in front of the HTTPS proxy.

## Alternatives

A separate API would add contracts and operational work before multiple clients are needed. Microservices would add infrastructure and coordination at the current stage.

## Consequences

Preserve domain boundaries in the code. A future API extraction is possible but will require work. Caching, backup, updates, and VPS capacity are project operational responsibilities. Functional modeling comes before tables and ingestion contracts.
