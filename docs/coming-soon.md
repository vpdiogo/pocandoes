# Coming-soon Publication

The static landing page publishes `https://pocandoes.com.br/` with Caddy. It has a separate Compose project and runs without the Next.js application, PostgreSQL, collectors, Node.js on the host, or a project `.env` file. Node.js is used only inside the image build to render the localized HTML and copy the shared design tokens.

## DNS and Prerequisites

The VPS needs Docker with Compose v2 or later and free public TCP ports 80 and 443. The Compose file also publishes UDP 443 for HTTP/3; HTTPS works over TCP when UDP is unavailable. Preserve SSH access when changing any firewall rules.

In the authoritative DNS zone, configure:

| Type | Name | Value | Initial TTL |
| --- | --- | --- | --- |
| A | `@` | The VPS public IPv4 address | 300 seconds |
| CNAME | `www` | `pocandoes.com.br` | 300 seconds |

Remove conflicting records for these names. Publish an AAAA record only when IPv6 reaches this VPS and the same service. Check existing CAA records, if any, allow the certificate authority Caddy uses. DNS changes may remain cached for the previous TTL.

## First Publication

After this change is available on the intended Git revision, obtain the repository on the VPS using your existing GitHub access. For a private repository, use a read-only deploy key or another approved credential; do not put tokens in clone URLs.

```sh
git clone https://github.com/vpdiogo/pocandoes.git
cd pocandoes
git switch main
git pull --ff-only
docker compose -f compose.coming-soon.yaml config --quiet
docker compose -f compose.coming-soon.yaml up -d --build
docker compose -f compose.coming-soon.yaml ps
docker compose -f compose.coming-soon.yaml logs --tail=100 coming-soon
```

If the checkout already exists, use that checkout instead of cloning again. Use the revision containing this implementation; `main` only contains it after merge. The first build downloads the pinned Node.js and Caddy images. The runtime image contains the generated static files and Caddy.

Caddy requests and renews certificates automatically when public DNS and inbound access are working. Its `caddy_data` volume retains certificate material and ACME account state; keep it private and preserve it across updates. The health check reads a static file through a separate loopback-only HTTP listener inside the container. A healthy container does not establish working public DNS, trusted HTTPS, or successful certificate issuance.

Verify externally:

```sh
curl -I http://pocandoes.com.br/
curl -I https://pocandoes.com.br/
curl -I https://www.pocandoes.com.br/
curl -I https://pocandoes.com.br/assets/share-card.png
```

Expect an HTTP-to-HTTPS redirect, a 200 response on the canonical HTTPS page and share image, and a redirect from `www` to `https://pocandoes.com.br/`. Open the page in a browser on desktop and mobile, check the certificate, and test sharing the URL. Messaging services can cache previews; correct metadata and image delivery alone do not prove their preview has refreshed.

## Updating and Recovery

Record the current Git revision before updating. Obtain the approved revision and rebuild:

```sh
git rev-parse HEAD
git pull --ff-only
docker compose -f compose.coming-soon.yaml up -d --build
docker compose -f compose.coming-soon.yaml ps
```

Repeat the public checks above. To roll back this static site, check out the recorded revision containing the coming-soon files and run the same `up -d --build` command. Preserve both Caddy volumes; never use `down -v` to fix startup or certificate errors.

To stop this publication while preserving its certificate state:

```sh
docker compose -f compose.coming-soon.yaml down
```

The separate project name isolates its resources from `compose.yaml`. When launching the application, keep a single public HTTPS entry point: replace the static site with an agreed Caddy reverse-proxy configuration and connect it to the application. That launch is a separate deployment change.

## Content and Local Verification

Portuguese copy belongs in `apps/coming-soon/locales/pt-BR.json`; HTML and CSS use English identifiers. The build copies the existing design-system `tokens.css`, renders HTML with escaped localized values, and writes ignored output to `apps/coming-soon/dist/`. The static landing page uses plain CSS because it has no React or CSS Modules build. The favicon is a provisional monogram. The share card is a 1200 × 630 PNG in `assets/`; update it alongside visible branding or copy changes.

With the repository's pinned Node.js version:

```sh
npm run build:coming-soon
python3 -m http.server 8080 --bind 127.0.0.1 --directory apps/coming-soon/dist
```

Open `http://127.0.0.1:8080/`. No npm dependency installation is required for this static build. For Docker verification, build the image and run `caddy validate` as in CI. Validate browser behavior and actual HTTP responses in addition to configuration syntax. Local validation does not issue or verify a production certificate.
