# Dependências e auditoria

A atualização para Next.js 16.4.5 corrigiu os alertas altos e críticos identificados no scaffolding. A auditoria de dependências de produção (`npm audit --omit=dev`) passou sem alertas na validação realizada.

## Pendência nas ferramentas de desenvolvimento

A auditoria completa ainda reporta alertas moderados propagados de `minimatch`: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), relacionado a consumo excessivo de recursos ao processar padrões glob.

As versões mais recentes verificadas de `eslint-plugin-import` (2.32.0), `eslint-plugin-jsx-a11y` (6.10.2) e `eslint-plugin-react` (7.37.5) dependem de `minimatch` 3. A correção indicada pela auditoria está em `minimatch` 11.0.1 ou superior, que altera a API: os plugins chamam a exportação do módulo como uma função, enquanto a versão 11 exporta um objeto. Um override global pode quebrar essas regras. O parser TypeScript também depende de uma linha anterior à correção.

Não foi aplicado override incompatível nem supressão da auditoria. Acompanhar versões compatíveis dos plugins e repetir `npm audit` ao atualizar a cadeia de lint. Os alertas permanecem abertos. O lint continua habilitado na CI.

Embora sejam dependências de desenvolvimento no manifesto, o Dockerfile atual copia a instalação completa para a imagem de execução. Portanto, a auditoria de produção zerada não significa que esses pacotes estejam ausentes da imagem.
