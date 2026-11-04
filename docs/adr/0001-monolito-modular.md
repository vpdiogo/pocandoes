# 0001 — Monólito modular com coletores independentes

Status: aceita.

## Contexto

O Pocando ES precisa de páginas públicas indexáveis, regras de negócio organizadas e coleta de fontes culturais. A prioridade inicial é evoluir o código com baixo custo operacional.

## Decisão

Next.js full-stack com módulos de negócio independentes do framework, PostgreSQL e coletores Python separados. A implantação inicial prevista é uma VPS com Docker Compose e Cloudflare à frente do proxy HTTPS.

## Alternativas

Uma API separada adicionaria contratos e operação antes de existir necessidade de múltiplos clientes. Microsserviços acrescentariam infraestrutura e coordenação ao estágio atual.

## Consequências

A separação por domínio deve ser preservada no código. Uma futura extração de API é possível, mas exigirá trabalho. Cache, backup, atualização e capacidade da VPS são responsabilidades operacionais do projeto. A modelagem funcional antecede tabelas e contratos de ingestão.
