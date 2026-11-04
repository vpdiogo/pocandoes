# Política de versões

Preferir versões estáveis atuais e, no caso de Node.js, a linha LTS atual. Confirmar compatibilidade com instalação pelo lockfile, lint, tipos, build e execução antes de atualizar.

| Componente | Versão configurada |
| --- | --- |
| Node.js | 26.13.0 LTS |
| Python | 3.15.2 (mínimo do pacote: 3.15) |
| PostgreSQL | 18.6 |
| Next.js | 16.4.5 |
| React / React DOM | 19.3.1 |
| Cliente pg | 8.23.1 |
| TypeScript | 7.0.2 |
| ESLint | 10.14.0 |

As versões são fixadas para reproduzir a instalação. Isso não atualiza automaticamente instalações locais; use `.nvmrc`, `collectors/.python-version`, Docker e a CI configurados. Dependências transitivas podem usar versões anteriores por exigência dos plugins; consulte `security.md` para a pendência da cadeia de lint.

Fontes consultadas: [Node.js](https://nodejs.org/dist/index.json), imagens oficiais de [Python](https://github.com/docker-library/official-images/blob/master/library/python) e [PostgreSQL](https://github.com/docker-library/official-images/blob/master/library/postgres), e tags estáveis do registro npm. Versões alpha, beta e RC foram excluídas.
