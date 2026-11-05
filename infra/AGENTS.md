# Infrastructure

Keep Compose files valid and local ports on loopback. Do not expose the database publicly. Preserve TLS and checksum verification; use the environment-provided certificates and proxy. Build secrets must not persist in image layers.

A major PostgreSQL version change requires a migration procedure. Never remove existing volumes to make startup pass. Distinguish build, local startup, and production deployment. Document operations and recovery in `docs/architecture.md`.
