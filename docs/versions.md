# Version Policy

Prefer current stable releases and the current Node.js LTS line. Confirm compatibility through lockfile installation, lint, type checks, build, and execution before updating.

| Component | Configured Version |
| --- | --- |
| Node.js | 26.13.0 LTS |
| Python | 3.15.2 (package minimum: 3.15) |
| PostgreSQL | 18.6 |
| Next.js | 16.4.5 |
| React / React DOM | 19.3.1 |
| PostgreSQL client (`pg`) | 8.23.1 |
| TypeScript | 7.0.2 |
| ESLint | 10.14.0 |

Versions are pinned to reproduce installation. This does not automatically update local installations; use `.nvmrc`, `collectors/.python-version`, Docker, and the configured CI. Transitive dependencies may use older versions required by plugins; see [security notes](security.md) for the outstanding lint dependency findings.

Sources consulted: [Node.js](https://nodejs.org/dist/index.json), the official [Python](https://github.com/docker-library/official-images/blob/master/library/python) and [PostgreSQL](https://github.com/docker-library/official-images/blob/master/library/postgres) images, and stable npm registry tags. Alpha, beta, and RC releases were excluded.
