import styled from "styled-components";
import TableBook from "../components/books/TableBook";
import Title from "../components/common/Title";
import ModalCreate from "../components/modals/ModalCreate";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect } from "react";
import { getAllBooks, deleteBook, getAllAuthors } from "../services/indexedDB";
import { AuthorsBooksContext } from "../contexts/AuthorsBooksContext";

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
  }
`;

/**
 * Componente que representa a página de livros para gerenciá-los
 *
 * Este componente utiliza funções de manipulação do IndexedDB e o contexto AuthorsBooksContext para carregar, exibir e excluir livros.
 * Ele também permite cadastrar novos livros usando o componente ModalCreate.
 *
 * @component
 * @returns {JSX.Element} O componente Books
 */
const Books = () => {
  const {
    books,
    addAllBooksToState,
    deleteBookFromState,
    addAllAuthorsToState
  } = useContext(AuthorsBooksContext);

  /**
   * Busca todos os livros no IndexedDB e atualiza o estado global
   *
   * @async
   * @function fetchBooks
   */
  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      const authorsData = await getAllAuthors();
      addAllBooksToState(booksData);
      addAllAuthorsToState(authorsData);
    } catch (error) {
      console.log(`Erro ao buscar livros: ${error}`);
      addAllBooksToState([]);
    }
  };

  /**
   * Exclui um livro do IndexedDB
   *
   * @async
   * @function handleDelete
   * @param {number} id - O ID do livro a ser excluído
   */
  const handleDelete = async (id) => {
    try {
      const result = await deleteBook(id);
      alert(result);
      deleteBookFromState(id);
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
          <RegisterButton>Cadastrar Livro</RegisterButton>
        </Dialog.Trigger>

        <ModalCreate title="Cadastro de Livro" type="book" />
      </Dialog.Root>

      {!Array.isArray(books) || books.length === 0 ? (
        <Title title="Nenhum livro cadastrado!" />
      ) : (
        <TableBook type="livro" onDelete={handleDelete} />
      )}
    </StyledBook>
  );
};

export default Books;
