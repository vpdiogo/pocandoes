# Infraestrutura

Mantenha os arquivos Compose válidos e as portas locais no loopback. Não exponha banco publicamente. Preserve a verificação de TLS e checksums; use os certificados e o proxy fornecidos pelo ambiente. Segredos de build não devem persistir nas camadas.

A mudança de versão principal do PostgreSQL exige procedimento de migração. Nunca remova volumes existentes para fazer a inicialização passar. Não confunda build, inicialização local e deploy de produção. Documente operações e recuperação em `docs/architecture.md`.
