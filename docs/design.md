# Diretrizes visuais

## Direção inicial

A direção acordada é sóbria, com referências capixabas discretas e identidade evoluindo com o produto. A base usa fundo claro, verde escuro e terracota, com tipografia do sistema. A regionalidade aparece no nome, na linguagem e no conteúdo. Logotipo, ilustrações e uma identidade completa serão definidos em trabalho de design próprio.

## Organização

`apps/web/src/design-system/tokens/tokens.css` é a fonte de cores semânticas, tipografia, espaços e dimensões. Componentes reutilizáveis ficam em `components`, composições em `patterns` e reset global em `styles`. Estilos de uma funcionalidade pertencem à própria funcionalidade, usando os tokens compartilhados.

`Button` preserva atributos nativos e usa `type="button"` por padrão para evitar submissões acidentais. Eventos precisam de um chamador cliente. `PageShell` fornece o landmark principal e o destino do link de pular navegação; use uma vez por página. `PageIntro` fornece o único título h1 da página e sua apresentação.

## Acessibilidade e conteúdo

- Almejar WCAG 2.2 AA: contraste de 4,5:1 para texto normal e 3:1 para texto grande. Acentos usados como texto precisam atender a esse contraste.
- Manter foco visível, operação por teclado, rótulos acessíveis e alvos de toque com pelo menos 44 px na base.
- Usar linguagem direta em português brasileiro. Estados e erros não dependem apenas de cor.
- Validar telas estreitas, zoom de 200%, conteúdo longo e orientação de paisagem sem perda de conteúdo. O layout é fluido, sem largura mínima fixa.
- Evitar animações gratuitas. Se adicionadas, respeitar `prefers-reduced-motion`.

## Verificação

Os testes de Button exercitam teclado, estado desabilitado e submissão de formulário. Eles usam DOM simulado: contraste, foco visível, responsividade e leitor de tela ainda exigem revisão em navegador. Não atribuir conformidade WCAG apenas porque o lint e os testes passaram.
