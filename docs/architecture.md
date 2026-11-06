# Architecture and Deployment

Next.js contains the interfaces and use cases. Organize future business rules in `apps/web/src/modules`, independent of routes and components. PostgreSQL stores the data. Python collectors run as separate processes; their ingestion contract will be defined alongside the domain model.

Within `apps/web/src`, `app` contains Next.js routes, layouts, and entry points; `modules` contains business rules; `server` contains server-only infrastructure; and `design-system` contains shared tokens, components, and visual patterns.

## Python Collectors

Use the version pinned in `collectors/.python-version`. The current package is a CLI entry point without functional collection. Keep collectors independent of Next.js and define ingestion contracts from agreed use cases before persisting data. When adding external sources, handle source limits, bounded timeouts, safe retries, deduplication, and provenance. See the [verification rules](development/workflow.md#verification-by-scope) for collector tests.

## VPS

The initial domain publication uses a [separate static coming-soon deployment](coming-soon.md). The application and database procedure below applies when deploying the platform; it is not required for the coming-soon page.

Install Docker and Compose, check out the repository, and configure `.env` with a strong, unique password. Run `docker compose up -d --build` from the root. The application and database listen only on the VPS loopback interface. Configure a host HTTPS proxy, such as Caddy or Nginx, forwarding to `127.0.0.1:3000`; configure the domain, DNS, certificates, firewall, and certificate renewal. With Cloudflare, use validated TLS to the origin (Full strict) and avoid caching authenticated routes or personalized data. Compose does not configure the proxy automatically.

To update, obtain the intended revision, make a backup, run `docker compose up -d --build`, and check the application and logs with `docker compose logs --tail=100 web db`. No automatic deployment is configured: VPS access and credentials still require setup. Define monitoring, image updates, and collector scheduling when collectors exist.

## Backup and Restoration

Create a consistent logical backup from the repository root:

```sh
docker compose exec -T db sh -c 'exec pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc' > pocandoes.dump
```

Transfer the file securely to storage outside the VPS, with access controls and retention. Test restoration regularly in a separate database. To restore into an empty test database named `pocandoes_restore`, previously created on the same server:

```sh
docker compose exec -T db sh -c 'exec pg_restore -U "$POSTGRES_USER" -d pocandoes_restore --no-owner --no-privileges' < pocandoes.dump
```

Restoring the production database can replace data and must follow a validated maintenance and recovery procedure. Never store credentials in the repository.

## Database Version

Compose uses PostgreSQL 18 and the `postgres18_data` volume, mounted at `/var/lib/postgresql` as required by the official image. Older PostgreSQL 17 volumes are neither reused nor removed. If older data exists, export it using the older version and restore it into the new database; changing the image alone does not migrate data.
