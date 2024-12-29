import { useEffect, useState } from "react";
import styled from "styled-components";
import Plus from "../assets/plus.svg";
import * as Dialog from "@radix-ui/react-dialog";
import BaseModal from "../components/BaseModal";
import Table from "../components/Table";
import Title from "../components/Title";
import { getAllAuthors, deleteAuthor } from "../services/indexedDB";

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

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const authorsData = await getAllAuthors();
      setAuthors(authorsData);
    } catch (error) {
      console.log(`Erro ao buscar autores: ${error}`);
      setAuthors([]);
    }
  };

  const handleAddAuthor = async (newAuthor) => {
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteAuthor(id);
      alert(result);
      setAuthors((prevAuthors) =>
        prevAuthors.filter((author) => author.id !== id)
      );
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
          <RegisterButton>
            <PlusIcon src={Plus} />
            Cadastrar Autor
          </RegisterButton>
        </Dialog.Trigger>

        <BaseModal
          title="Cadastro de Autor"
          type="author"
          onAddData={handleAddAuthor}
        />
      </Dialog.Root>

      {!Array.isArray(authors) || authors.length === 0 ? (
        <Title title="Nenhum autor cadastrado!" />
      ) : (
        <Table type="autor" data={authors} onDelete={handleDelete} />
      )}
    </StyledAuthor>
  );
};

export default Authors;
