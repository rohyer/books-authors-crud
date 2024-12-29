import styled from "styled-components";
import Trash from "../assets/trash.svg";
import * as Dialog from "@radix-ui/react-dialog";
import DeleteModal from "./DeleteModal";
import Title from "./Title";

const StyledTable = styled.table`
  width: 100%;
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

const Table = ({ type, data, onDelete }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>E-mail</TableHeader>
          <TableHeader></TableHeader>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>

              <TableCell style={{ textAlign: "center" }}>
                <Dialog.Root>
                  <Dialog.Trigger asChild style={{ textAlign: "center" }}>
                    <img
                      src={Trash}
                      alt="Deletar registro"
                      style={{
                        cursor: "pointer",
                        width: "18px",
                        height: "auto"
                      }}
                    />
                  </Dialog.Trigger>

                  <DeleteModal
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