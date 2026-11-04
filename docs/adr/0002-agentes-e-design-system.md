# 0002 — Instruções por escopo e design system interno

Status: aceita.

## Contexto

O desenvolvimento assistido por agentes precisa de convenções consistentes. A interface pública precisa de padrões visuais que possam evoluir sem duplicação de estilos.

## Decisão

Usar AGENTS.md na raiz e nos escopos relevantes, com papéis documentados e verificação na CI. Manter o design system dentro da aplicação, com tokens CSS semânticos, CSS Modules e componentes React. Migrar a página inicial para esses padrões.

## Alternativas

A orquestração de vários agentes e um pacote visual independente não têm necessidade demonstrada neste estágio. Tailwind e shadcn/ui são opções futuras, condicionadas a ganho concreto e decisão explícita de adoção; a base atual já usa CSS nativo.

## Consequências

Papéis não iniciam agentes automaticamente. As instruções se somam às instruções da sessão e não ampliam permissões. A CI inclui testes de comportamento de componentes e auditoria com limiar alto; a dívida moderada permanece visível. A direção visual acordada é sóbria, com referências capixabas discretas; a identidade será refinada com a evolução do produto. O design system deve crescer a partir dos fluxos reais.
