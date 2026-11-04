# Design system

Leia `docs/design.md` a partir da raiz do repositório. Defina cores, tipografia, espaços e dimensões compartilhadas em `tokens/tokens.css`. Mantenha o CSS global restrito ao reset e comportamento global; use CSS Modules nos componentes e padrões.

Componentes não contêm regras de negócio ou consultas de dados. Preserve semântica HTML, propriedades nativas e estados de foco e desabilitado. Ações usam button; navegação usa links. Passe eventos a partir de uma fronteira cliente explícita.

Adicione abstrações quando houver um padrão de uso claro. Valide navegação por teclado, tamanho de toque e contraste; não use apenas cor para comunicar estado. A direção visual é sóbria, com referências capixabas discretas; consulte as diretrizes antes de introduzir novas escolhas visuais.
