import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import FormAuthor from "../authors/FormAuthor";
import FormBook from "../books/FormBook";
import ModalTitle from "./Title";
import ModalDescription from "./Description";
import ModalClose from "./Close";

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
  padding: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const ModalCreate = ({ title, type }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content
        style={
          type === "book" ? { maxHeight: "425px" } : { maxHeight: "350px" }
        }
      >
        <ModalTitle title={title} />
        {type === "book" && (
          <>
            <ModalDescription>
              Cadastre livros através do formulário abaixo
            </ModalDescription>
            <FormBook />
          </>
        )}
        {type === "author" && (
          <>
            <ModalDescription>
              Cadastre autores através do formulário abaixo
            </ModalDescription>
            <FormAuthor />
          </>
        )}
        <ModalClose />
      </Content>
    </Dialog.Portal>
  );
};

export default ModalCreate;
