# Online Library

A Online Library é um projeto de um CRUD de autores e livros criados com JavaScript, React e Vite.

## Sobre o Projeto

A aplicação possui 3 páginas principais: Home, Autores, Livros e vários componentes desenvolvidos para integrar a essas páginas.

O roteamente foi desenvolvido com React Router DOM transformando o projeto em uma aplicação SPA (Single Page Application).

Para possibilitar o armazenamento das informações diretamente no navegador foi utilizado IndexedDB.

Para um melhor gerenciamento do estado foi usado React Context API.

## Funcionalidades

- Criar um livro (modal)
- Visualizar todos os livros (tabela)
- Visualizar um livro específico (modal)
- Excluir um livro (alerta)

- Criar um autor (modal)
- Visualizar todos os autores (tabela)
- Visualizar um autor específico (modal)
- Excluir um autor (alerta)
  - Todos os livros associados ao autor também são excluídos (alerta)

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [StyledComponents](https://styled-components.com/)
- [ReactRouter](https://reactrouter.com/)
- [RadixUI](https://www.radix-ui.com/)
- [JSDoc](https://jsdoc.app/)

## Instalação

1. Clone o repositório: git clone https://github.com/rohyer/books-authors-crud.git

2. Instale as dependências: npm install

3. Rode o projeto com o comando: npm run dev

### React + Vite (orientação padrão do Vite)

Esse template fornece uma configuração mínima para o React executar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
