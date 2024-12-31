import { createContext, useState } from "react";

export const AuthorsBooksContext = createContext();

/**
 * Contexto que gerencia o estado dos autores e livros na aplicação.
 * Possui funções para adicionar e deletar autores e livros.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - Os componentes filhos que terão acesso ao contexto.
 * @returns {JSX.Element} O provedor do contexto, que envolve os componentes filhos e fornece os valores do contexto
 *
 * O contexto inclui os valores e funções a seguir:
 * - `authors`: Lista de autores cadastrados.
 * - `books`: Lista de livros cadastrados.
 * - `addAuthorToState`: Função para adicionar um novo autor ao estado.
 * - `addAllAuthorsToState`: Função para adicionar todos os autores ao estado.
 * - `deleteAuthorFromState`: Função para excluir um autor do estado.
 * - `addBookToState`: Função para adicionar um novo livro ao estado.
 * - `addAllBooksToState`: Função para adicionar todos os livros ao estado.
 * - `deleteBookFromState`: Função para excluir um livro do estado.
 */
export const AuthorsBooksProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  const addAuthorToState = (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const addAllAuthorsToState = (authors) => {
    setAuthors(authors);
  };

  const deleteAuthorFromState = (id) => {
    setAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id)
    );
    setBooks((prevBooks) =>
      prevBooks.filter((book) => Number(book.author) !== id)
    );
  };

  const addBookToState = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const addAllBooksToState = (books) => {
    setBooks(books);
  };

  const deleteBookFromState = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <AuthorsBooksContext.Provider
      value={{
        authors,
        books,
        addAuthorToState,
        addAllAuthorsToState,
        deleteAuthorFromState,
        addBookToState,
        addAllBooksToState,
        deleteBookFromState
      }}
    >
      {children}
    </AuthorsBooksContext.Provider>
  );
};
