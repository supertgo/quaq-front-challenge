## Desafio Quaq

Objetivo:  criar um clone não funcional da interface do IFood(interface antiga) que rode em um ambiente web PWA.
Não era necessário um layout responsivo para viewmport do desktop


## Como testar 

 - Rode 
```bash
  yarn && yarn build && yarn start
```
 - Entre [http://localhost:3000](http://localhost:3000) no google chrome e cliquei no ícone de 
 - Clique no ícone para baixar o pwa
<img src="/demo/pwa.png" />
  - Abra o pwa baixado
  - 
### Pagina do Restaurante

A página do restaurante pode ser testada entrando no link [http://localhost:3000/page2](http://localhost:3000/page2) 

## Demo 

<p align="center">
  <img src="/demo/quaq-front-challenge.gif" />
  <img src="/demo/quaq-front-challenge2.gif" />
</p>


## Techs

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Comandos

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

