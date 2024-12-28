import Table from "../components/Table";
import Title from "../components/Title";

const authorsArray = [
  { id: 1, name: "Guilherme R.", email: "guilhermerl.dev@gmail.com" },
  { id: 1, name: "Guilherme R.", email: "guilhermerl.dev@gmail.com" },
  { id: 1, name: "Guilherme R.", email: "guilhermerl.dev@gmail.com" }
];

const Authors = () => {
  return (
    <>
      <Title title="Autores cadastrados" />
      <Table data={authorsArray} />
    </>
  );
};

export default Authors;
