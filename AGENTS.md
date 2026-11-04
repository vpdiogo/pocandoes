# Instruções para trabalhar no Pocando ES

Leia as instruções locais do diretório em que vai trabalhar. Use o checkout existente; cada tarefa na nuvem já é isolada. Crie worktrees somente quando solicitado.

## Contexto e limites

Agenda e guia cultural do Espírito Santo. O Next.js é um monólito modular; Python executa coletores independentes; PostgreSQL persiste dados. Regras de negócio ficam em `apps/web/src/modules`, sem dependência de React ou Next. Rotas e Server Actions validam entradas e chamam os casos de uso. A modelagem de entidades e os contratos de ingestão ainda estão pendentes; não os invente durante tarefas estruturais.

## Papéis

Consulte [docs/agents/roles.md](docs/agents/roles.md) conforme a tarefa. Os papéis são especializações e listas de revisão; não iniciam agentes automaticamente. Uma tarefa pode usar mais de uma perspectiva. Delegação e escrita concorrente precisam de escopo e responsabilidade explícitos, conforme as permissões da sessão.

## Fluxo

- Confira `git status`, preserve alterações existentes e faça mudanças proporcionais ao pedido.
- Consulte as versões em `docs/versions.md` e os comandos no README. Use Node.js 26.13.0; não assuma que o Node ou Python padrão da máquina corresponde ao projeto.
- Para mudanças no Next, consulte os guias relevantes da versão instalada em `node_modules/next/dist/docs/`.
- Reutilize tokens e componentes do design system; não crie outro diretório de estilos globais.
- Registre decisões estruturais em `docs/adr`, com justificativas e consequências.
- Valide o comportamento afetado. Informe comandos e resultados reais, separando falhas, verificações não executadas e limitações. Não remova asserções nem desative gates para obter aprovação.
- Não inclua segredos, dumps, `.env` ou dados pessoais em commits ou saídas. Consulte `docs/security.md`; não suprima alertas para fazer a CI passar.
- Deploys, merges, publicação e mudanças destrutivas dependem da autorização dada na tarefa.

## Qualidade

Na raiz: `npm run lint`, `npm run typecheck`, `npm test` e `npm run build`. A auditoria de segurança está na CI com limiar alto, mantendo os moderados conhecidos documentados. Testes devem cobrir comportamento e risco real, sem metas arbitrárias de cobertura nem testes que apenas reproduzam a implementação. Mudanças de interface também precisam de revisão de teclado, foco, contraste e responsividade; testes em DOM simulado não substituem navegador.
