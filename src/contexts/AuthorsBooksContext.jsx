import { createContext, useState } from "react";

export const AuthorsBooksContext = createContext();

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
