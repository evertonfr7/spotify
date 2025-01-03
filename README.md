# Spotify - Desafio LuizaLabs Front-end

### Everton Freitas

## Demo

https://spotify-orcin-psi.vercel.app/login

## Como executar o projeto

- Instale as dependências: `pnpm install`
- Configure as variáveis de ambiente: `.env.example` para seu arquivo `.env` (Apenas `VITE_SPOTIFY_CLIENT_ID` e `VITE_SENTRY_DSN` são obrigatórias)
- Na sua aplicação Spotify, configure o redirect URI para `http://localhost:5173/callback`
- Execute o projeto: `pnpm dev`

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

Estou utilizando o [Eslint](https://eslint.org/) e o
[Prettier](https://prettier.io/) para linting e estilo do código.
E eu também inclui configurações do [editorconfig](https://editorconfig.org/) para o vscode.

### Roteamento
Utilizei o [react-router-dom](https://reactrouter.com/) para o roteamento da aplicação.

### Sonarqube
Instalei o [sonarqube](https://www.sonarqube.org/) para fazer a qualidade de código.
rodei local, e melhorei a qualidade do código com base no reporte gerado pelo sonarqube.

`docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest`

`SONAR_TOKEN=<SEU_TOKEN> pnpm sonar`

### Testes unitários

Estou utilizando o [Jest](https://jestjs.io/) para testes unitários.

Juntamente com o [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Testes E2E

Estou utilizando o [Cypress](https://www.cypress.io/) para testes E2E.

### CI/CD

Estou utilizando o [Github Actions](https://github.com/features/actions) para CI/CD.

Estou utilizando o [Vercel](https://vercel.com/) para o deploy da aplicação.

### Deploy
Deploy da aplicação (Vercel: https://spotify-orcin-psi.vercel.app/login)



# Requisitos

## Requisitos obrigatórios

- [x] Seguimentação de commits
- [x] Lint
- [x] Autenticação via Spotify
- [x] Listar artistas
- [x] Listar albuns de um artista
- [x] Criar playlist
- [x] Utilizar paginação (scroll infinito ou não)
- [x] Funcionamento offline
- [x] Testes unitários
- [x] Deploy da aplicação (Vercel: https://spotify-orcin-psi.vercel.app/login)

## Bônus

- [x] Testes E2E
- [x] Integração com Sentry
- [x] CI/CD
- [x] Responsividade (celular e tablet)
- [x] Qualidade de código (Sonarqube)
- [x] PWA
