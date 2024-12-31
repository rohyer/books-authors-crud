import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
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
  max-height: 300px;
  padding: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const ModalRead = ({ type, ...data }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <ModalTitle title={`Informações de ${type}.`} />

        {type === "autor" ? (
          <ModalDescription>
            <span>ID: {data.id}</span>
            <span>Nome: {data.name}</span>
            <span>E-mail: {data.email}</span>
          </ModalDescription>
        ) : (
          <ModalDescription>
            <span>ID: {data.id}</span>
            <span>Nome: {data.name}</span>
            <span>Páginas: {data.pages}</span>
            <span>ID do Autor: {data.author}</span>
          </ModalDescription>
        )}

        <ModalClose />
      </Content>
    </Dialog.Portal>
  );
};

export default ModalRead;
