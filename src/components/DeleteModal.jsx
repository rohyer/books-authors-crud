import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

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

const DeleteModal = ({ type, id, name, onDelete }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Deletar registro</Title>

        <Description>
          Deseja mesmo deletar o {type} {name}?
        </Description>

        <DeleteButton onClick={() => onDelete(id)}>Deletar</DeleteButton>
        <CancelButton>Cancelar</CancelButton>

        <CloseButton aria-label="Close">×</CloseButton>
      </Content>
    </Dialog.Portal>
  );
};

export default DeleteModal;
