import styled from "styled-components";
import TableBooks from "../components/TableBooks";
import Title from "../components/Title";
import BaseModal from "../components/BaseModal";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { getAllBooks, deleteBook, getAllAuthors } from "../services/indexedDB";

const StyledBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;
`;

const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  color: #333333;
  border-color: #0073d0;
  background-color: #ffffff;
  transition: all 0.25s;

  &:hover {
    color: #ffffff;
    background-color: #0073d0;

    svg {
      color: #fff;
    }
  }
`;

const PlusIcon = styled.img`
  width: 20px;
  height: auto;
  color: #333333;
  transition: all 0.25s;
`;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
      const authorsData = await getAllAuthors();
      setAuthors(authorsData);
    } catch (error) {
      console.log(`Erro ao buscar livros: ${error}`);
      setBooks([]);
    }
  };

  const handleAddBook = async (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteBook(id);
      alert(result);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBook>
      <Dialog.Root>
        <Dialog.Trigger asChild style={{ textAlign: "center" }}>
          <RegisterButton>
            {/* <PlusIcon src={Plus} /> */}
            Cadastrar Livro
          </RegisterButton>
        </Dialog.Trigger>

        <BaseModal
          title="Cadastro de Livro"
          type="book"
          onAddData={handleAddBook}
          authorsData={authors}
        />
      </Dialog.Root>

      {!Array.isArray(books) || books.length === 0 ? (
        <Title title="Nenhum livro cadastrado!" />
      ) : (
        <TableBooks type="livro" data={books} onDelete={handleDelete} />
      )}
    </StyledBook>
  );
};

export default Books;
