import styled from "styled-components";
import Trash from "../../assets/trash.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import ModalDelete from "../modals/ModalDelete";
import ModalRead from "../modals/ModalRead";

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

const Table = ({ type, data, onDelete }) => {
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
        {data &&
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Dialog.Root>
                  <Dialog.Trigger asChild style={{ textAlign: "center" }}>
                    <Span>
                      <FaExternalLinkAlt style={{ marginRight: "5px" }} />
                      {item.name}
                    </Span>
                  </Dialog.Trigger>

                  <ModalRead
                    type={type}
                    id={item.id}
                    name={item.name}
                    pages={item.pages}
                    author={item.author}
                  />
                </Dialog.Root>
              </TableCell>
              <TableCell>{item.pages}</TableCell>
              <TableCell>{item.author}</TableCell>

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
                    type={type}
                    id={item.id}
                    name={item.name}
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
