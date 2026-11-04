# Aplicação web

Siga as instruções da raiz. `src/app` contém rotas, layouts e entradas do Next. `src/modules` contém módulos de negócio. `src/server` contém infraestrutura exclusiva do servidor. `src/design-system` contém tokens, componentes e padrões visuais compartilhados.

Mantenha Server Components como padrão; declare a fronteira cliente quando precisar de estado ou interação no navegador. Nunca importe banco ou variáveis secretas em código cliente. Handlers validam entradas e delegam casos de uso. Componentes de interface não consultam o banco.

Antes de alterar APIs ou configuração do Next, leia o guia relevante em `node_modules/next/dist/docs/`, resolvendo o pacote a partir deste diretório. Use os testes existentes e adicione cenários de comportamento ao mudar componentes interativos. Testes de Server Components assíncronos precisam de uma estratégia de integração ou navegador, pois o Vitest não os valida diretamente.
