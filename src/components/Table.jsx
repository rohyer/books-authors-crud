import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  max-width: 1280px;
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

const Table = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>E-mail</TableHeader>
          {data[0].authorId && <TableHeader>Autor</TableHeader>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            {item.authorId && <TableCell>{item.authorId}</TableCell>}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
