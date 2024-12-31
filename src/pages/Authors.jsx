import { useContext, useEffect } from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import ModalCreate from "../components/modals/ModalCreate";
import TableAuthor from "../components/authors/TableAuthor";
import Title from "../components/common/Title";
import {
  getAllAuthors,
  deleteAuthor,
  deleteBookByAuthor
} from "../services/indexedDB";
import { AuthorsBooksContext } from "../contexts/AuthorsBooksContext";

const StyledAuthor = styled.div`
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
 * Componente que representa a página de autores para gerenciá-los.
 *
 * Este componente utiliza funções de manipulação do IndexedDB e o contexto AuthorsBooksContext para carregar, exibir e excluir autores.
 * Ele também permite cadastrar novos autores usando o componente ModalCreate.
 *
 * @component
 * @returns {JSX.Element} O componente Authors.
 */
const Authors = () => {
  const { authors, addAllAuthorsToState, deleteAuthorFromState } =
    useContext(AuthorsBooksContext);

  /**
   * Busca todos os autores no IndexedDB e atualiza o estado global.
   *
   * @async
   * @function fetchAuthors
   */
  const fetchAuthors = async () => {
    try {
      const authorsData = await getAllAuthors();

      addAllAuthorsToState(authorsData);
    } catch (error) {
      console.log(`Erro ao buscar autores: ${error}`);
      addAllAuthorsToState([]);
    }
  };

  /**
   * Exclui um autor e todos os seus livros associados do IndexedDB.
   *
   * @async
   * @function handleDelete
   * @param {number} id - O ID do autor a ser excluído
   */
  const handleDelete = async (id) => {
    try {
      const deletedAuthorResult = await deleteAuthor(id);
      const deletedBookResult = await deleteBookByAuthor(id);
      deleteAuthorFromState(id);
      alert(deletedAuthorResult + "\n" + deletedBookResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <StyledAuthor>
      <Dialog.Root>
        <Dialog.Trigger asChild style={{ textAlign: "center" }}>
          <RegisterButton>Cadastrar Autor</RegisterButton>
        </Dialog.Trigger>

        <ModalCreate title="Cadastro de Autor" type="author" />
      </Dialog.Root>

      {!Array.isArray(authors) || authors.length === 0 ? (
        <Title title="Nenhum autor cadastrado!" />
      ) : (
        <TableAuthor type="autor" onDelete={handleDelete} />
      )}
    </StyledAuthor>
  );
};

export default Authors;
