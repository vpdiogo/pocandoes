# Integração contínua

Use as versões documentadas e a instalação pelo lockfile. Preserve os gates de lint, tipos, testes, build e auditoria. O teste do pacote Python ainda é uma verificação de instalação e execução do CLI; não representa coleta funcional ou cobertura de domínio.

Investigue falhas antes de mudar o gate. Não use `continue-on-error`, redução do escopo da auditoria ou remoção de verificações para mascarar problemas. Mudanças em workflows não comprovam sua execução no GitHub: registre separadamente os resultados locais e remotos.
