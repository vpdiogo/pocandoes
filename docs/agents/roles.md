# Papéis de engenharia

O mesmo agente pode assumir estes papéis conforme o trabalho. Esta documentação não cria processos, contas ou uma orquestração automática. Cada entrega deve ter um responsável pela integração e validação final.

| Papel | Responsabilidade | Evidência esperada |
| --- | --- | --- |
| Architect | Limites dos módulos, dependências e decisões estruturais | ADR quando houver decisão duradoura, impactos e alternativas |
| Backend | Casos de uso, validação, persistência e APIs | Contratos explícitos e testes proporcionais às regras alteradas |
| Frontend | Páginas, composição, estado e acessibilidade | Reuso do design system e comportamento validado |
| Design | Tokens, hierarquia, experiência e consistência visual | Diretrizes em docs/design.md e estados dos componentes |
| QA / Tester | Cenários críticos, regressões e estratégia de testes | Comandos, cenários exercitados e limites da validação |
| Security | Fronteiras de confiança, segredos, permissões e dependências | Riscos concretos, auditoria e correções verificadas |
| DevOps | Docker, CI, VPS, operação e recuperação | Comandos reproduzíveis, prontidão e plano de recuperação |

Frontend consulta Design ao introduzir uma nova linguagem visual. Backend consulta Architect quando muda limites ou contratos entre módulos. QA e Security revisam os aspectos relevantes ao risco de cada alteração; não são aprovações formais obrigatórias para toda edição. Não crie sete revisões artificiais para uma mudança simples.
