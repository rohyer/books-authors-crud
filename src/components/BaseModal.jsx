import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import AuthorForm from "./AuthorForm";
import BookForm from "./BookForm";

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  max-height: 400px;
  padding: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Title = styled(Dialog.Title)`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  color: #444;
  margin-bottom: 10px;
`;

const Description = styled(Dialog.Description)`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #333;
  margin-bottom: 15px;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #e62828;
  background-color: #ddd;
  transition: all 0.3s;
  &:hover {
    background-color: #ccc;
    border-color: #e62828;
  }
`;

const BaseModal = ({ title, type, onAddData }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>{title}</Title>
        {type === "book" && (
          <>
            <Description>
              Cadastre livros através do formulário abaixo
            </Description>
            <BookForm onAddData={onAddData} />
          </>
        )}
        {type === "author" && (
          <>
            <Description>
              Cadastre autores através do formulário abaixo
            </Description>
            <AuthorForm onAddData={onAddData} />
          </>
        )}
        <CloseButton aria-label="Close">×</CloseButton>
      </Content>
    </Dialog.Portal>
  );
};

export default BaseModal;
