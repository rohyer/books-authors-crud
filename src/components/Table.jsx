import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
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

const TrashIcon = styled(FaTrashAlt)`
  cursor: pointer;
  color: #ff0000;
`;

const Table = ({ type, data, onDelete }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>E-mail</TableHeader>
          {data && data[0] && data[0].authorId && (
            <TableHeader>Autor</TableHeader>
          )}
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
              {item.authorId && <TableCell>{item.authorId}</TableCell>}

              <TableCell style={{ textAlign: "center" }}>
                <Dialog.Root>
                  <Dialog.Trigger asChild style={{ textAlign: "center" }}>
                    <TrashIcon />
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
