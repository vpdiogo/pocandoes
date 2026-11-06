# 0004 — Static Coming-soon Publication

Status: accepted.

## Context

The owner has registered `pocandoes.com.br` and wants a public coming-soon page on the existing Hostinger VPS before implementing the platform's use cases.

## Decision

Keep a small static site in `apps/coming-soon/` and publish it through a separate Caddy Compose project. Render Portuguese translation resources during the Docker build and reuse the application's CSS tokens. Persist Caddy certificate state in dedicated volumes, redirect `www` to the canonical domain, and use automatic HTTPS.

## Alternatives

Running Next.js and PostgreSQL would add runtime requirements for a static publication. A hosted landing-page service would introduce an additional platform despite the existing VPS. A manual certificate process would require separate renewal operations.

## Consequences

The runtime needs only Caddy and generated static files. The modular-monolith application remains the product architecture. The landing page has its own deployment lifecycle; the platform launch will need an explicit transition to a reverse proxy with a single public HTTPS entry point. Working public DNS and network access are prerequisites for certificate issuance.
