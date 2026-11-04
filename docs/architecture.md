# Arquitetura e implantação

O Next.js concentra interfaces e casos de uso. Organize regras futuras em `apps/web/src/modules`, independentes de rotas e componentes. PostgreSQL armazena os dados. Os coletores Python são processos separados; seu contrato de ingestão será definido junto à modelagem.

## VPS

Instale Docker e Compose, faça checkout do repositório e configure `.env` com senha forte e exclusiva. Execute `docker compose up -d --build` na raiz. A aplicação e o banco escutam somente no loopback da VPS. Configure um proxy HTTPS no host, por exemplo Caddy ou Nginx, encaminhando para `127.0.0.1:3000`; configure o domínio, DNS, certificados, firewall e renovação de certificados. Com Cloudflare, use TLS validado até a origem (Full strict) e evite cache de rotas autenticadas e dados personalizados. O Compose não configura o proxy automaticamente.

Para atualizar, obtenha a revisão desejada, faça backup, execute `docker compose up -d --build` e verifique a aplicação e os logs com `docker compose logs --tail=100 web db`. Não há deploy automático: acesso à VPS e credenciais ainda dependem de configuração. Defina também monitoramento, atualização de imagens e agendamento dos coletores quando existirem.

## Backup e restauração

Um backup lógico consistente pode ser criado na raiz com:

```sh
docker compose exec -T db sh -c 'exec pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc' > pocandoes.dump
```

Envie o arquivo por um canal seguro para armazenamento fora da VPS, com controle de acesso e retenção. Teste a restauração regularmente em um banco separado. Para restaurar em um banco de teste vazio chamado `pocandoes_restore`, previamente criado no mesmo servidor:

```sh
docker compose exec -T db sh -c 'exec pg_restore -U "$POSTGRES_USER" -d pocandoes_restore --no-owner --no-privileges' < pocandoes.dump
```

A restauração no banco de produção pode substituir dados e deve seguir um procedimento de manutenção e recuperação validado. Nunca armazene credenciais no repositório.

## Versão do banco

O Compose usa PostgreSQL 18 e o volume `postgres18_data`, montado em `/var/lib/postgresql` conforme a imagem oficial. Volumes antigos de PostgreSQL 17 não são reutilizados nem removidos. Se houver dados anteriores, exporte com a versão anterior e restaure no banco novo; trocar somente a imagem não migra os dados.
