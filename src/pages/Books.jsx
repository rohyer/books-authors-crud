import Table from "../components/Table";
import Title from "../components/Title";

const booksArray = [
  {
    id: 1,
    name: "Guilherme R.",
    email: "guilhermerl.dev@gmail.com",
    authorId: 10
  },
  {
    id: 1,
    name: "Guilherme R.",
    email: "guilhermerl.dev@gmail.com",
    authorId: 12
  },
  {
    id: 1,
    name: "Guilherme R.",
    email: "guilhermerl.dev@gmail.com",
    authorId: 18
  }
];

const Books = () => {
  return (
    <>
      <Title title="Livros cadastrados" />
      <Table data={booksArray} />
    </>
  );
};

export default Books;
