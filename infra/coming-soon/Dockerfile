# syntax=docker/dockerfile:1
FROM node:26.13.0-bookworm-slim AS build
WORKDIR /app
COPY apps/coming-soon apps/coming-soon
COPY apps/web/src/design-system/tokens/tokens.css apps/web/src/design-system/tokens/tokens.css
RUN node apps/coming-soon/build.mjs

FROM caddy:2.11.9-alpine@sha256:ae5e525ca6773b0a4ce579c774cb39b3147e1576084139229517bdbcfe3ed812
COPY infra/coming-soon/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/apps/coming-soon/dist /srv
