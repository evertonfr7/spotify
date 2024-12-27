# Spotify - Desafio LuizaLabs Front-end 
### Everton Freitas

## Projeto

### Decisões
- Utilizei React com o Vite para desenvolvimento. Typescript + [SWC](https://swc.rs/).
- Vou inicializar o desenvolvimento dos componentes, minha ideia nesse ponto do desafio é garantir que temos os componentes mais fundamentalistas para o desenvolvimento da aplicação. Seguirei um padrão de arquitetura onde eu tenho os elementos mais simples e depois os componentes mais complexos.
Organizarei da seguinte maneira:

### Componentes simples
Ficam na pasta `src/components/ui`, e poderiam ser também elementos do próprio design system da empresa como botões, inputs, etc por exemplo. Inclusive de um pacote externo. Mas aqui eles serão criados dentro da aplicação. Essa decisão foi feita para facilitar uma possibilidade de migração para o design system da empresa, se necessário.

### Componentes mais complexos
Ficam na pasta `src/components`, e são compostos por componentes mais simples, existentes na pasta `src/components/ui`

Desse modo escalar a aplicação fica mais simples e seguro. E modificar um elemento de design system, por exemplo, fica mais eficiente. Além de ter uma estrutura mais clara, e evitar problemas futuros de manutenção e repetição de códigos.

### Linting e code style
Estou utilizando o [Eslint](https://eslint.org/).
Prettier para formatar o código.

# Requisitos

## Requisitos obrigatórios
- [ ] Seguimentação de commits
- [X] Lint
- [ ] Autenticação via Spotify
- [ ] Listar artistas
- [ ] Listar albuns de um artista
- [ ] Utilizar paginação (scroll infinito ou não)
- [ ] Funcionamento offline
- [ ] Testes unitários
- [ ] Deploy da aplicação

## Bônus
- [ ] Testes E2E
- [ ] Integração com Sentry
- [ ] CI/CD
- [ ] Responsividade (celular e tablet)
- [ ] Qualidade de código (Sonarqube)
- [ ] PWA