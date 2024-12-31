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
  max-height: 175px;
  padding: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const DeleteButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: #ffffff;
  background-color: #ff0000aa;
  border: none;
  transition: all 0.25s;

  &:hover {
    background-color: #ff0000;
  }
`;

const CancelButton = styled(Dialog.Close)`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: #333;
  background-color: #ddd;
  border: none;
  margin-left: 15px;
  transition: all 0.25s;

  &:hover {
    background-color: #bbb;
  }
`;

const ModalDelete = ({ type, id, name, onDelete }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <ModalTitle title="Deletar registro" />

        <ModalDescription>
          Deseja mesmo deletar o {type} {name}?
        </ModalDescription>

        <DeleteButton onClick={() => onDelete(id)}>Deletar</DeleteButton>
        <CancelButton>Cancelar</CancelButton>

        <ModalClose />
      </Content>
    </Dialog.Portal>
  );
};

export default ModalDelete;
