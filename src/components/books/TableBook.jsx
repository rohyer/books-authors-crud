import styled from "styled-components";
import Trash from "../../assets/trash.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import ModalDelete from "../modals/ModalDelete";
import ModalRead from "../modals/ModalRead";
import { useContext } from "react";
import { AuthorsBooksContext } from "../../contexts/AuthorsBooksContext";

const StyledTable = styled.table`
  display: block;
  width: 100%;
  overflow-x: auto;
  margin: 20px auto 0px;
`;

const TableHeader = styled.th`
  background-color: #0073d0;
  color: #fff;
`;

const TableCell = styled.td`
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #e0e0e0;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: #646cff;

  &:hover {
    color: #535bf2;
    text-decoration: underline;
  }
`;

/**
 * Componente responsável por renderizar uma tabela de livros.
 *
 * Exibe os livros disponíveis no contexto AuthorsBooksContext,
 * com funcionalidades para visualizar e excluir livros usando os
 * modais ModalRead e ModalDelete. Cada linha da tabela possui o
 * id, nome, páginas, ID do autor e ações para o livro.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.onDelete - Callback para excluir um livro. Recebe o ID do livro como parâmetro.
 * @returns {JSX.Element} - O componente TableBooks.
 */
const Table = ({ onDelete }) => {
  const { books } = useContext(AuthorsBooksContext);

  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader style={{ width: "8%", minWidth: "100px" }}>
            ID
          </TableHeader>
          <TableHeader style={{ width: "40%", minWidth: "250px" }}>
            Name
          </TableHeader>
          <TableHeader style={{ width: "40%", minWidth: "250px" }}>
            Pages
          </TableHeader>
          <TableHeader style={{ width: "8%", minWidth: "100px" }}>
            ID Author
          </TableHeader>
          <TableHeader style={{ width: "5%", minWidth: "80px" }}></TableHeader>
        </tr>
      </thead>
      <tbody>
        {books &&
          books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.id}</TableCell>
              <TableCell>
                <Dialog.Root>
                  <Dialog.Trigger asChild style={{ textAlign: "center" }}>
                    <Span>
                      <FaExternalLinkAlt style={{ marginRight: "5px" }} />
                      {book.name}
                    </Span>
                  </Dialog.Trigger>

                  <ModalRead
                    type="livro"
                    id={book.id}
                    name={book.name}
                    pages={book.pages}
                    author={book.author}
                  />
                </Dialog.Root>
              </TableCell>
              <TableCell>{book.pages}</TableCell>
              <TableCell>{book.author}</TableCell>

              <TableCell style={{ textAlign: "center" }}>
                <Dialog.Root>
                  <Dialog.Trigger asChild style={{ textAlign: "center" }}>
                    <img
                      src={Trash}
                      alt="Deletar registro"
                      style={{
                        cursor: "pointer",
                        width: "15px",
                        height: "auto"
                      }}
                    />
                  </Dialog.Trigger>

                  <ModalDelete
                    type="livro"
                    id={book.id}
                    name={book.name}
                    onDelete={onDelete}
                  />
                </Dialog.Root>
              </TableCell>
            </TableRow>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
