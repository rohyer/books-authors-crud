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
  max-height: 500px;
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
`;

const RegisterButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  background-color: #0073d0cc;
  transition: all 0.3s;
  &:hover {
    background-color: #0073d0ff;
  }
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

const AuthorModal = ({ title }) => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title style={{ fontSize: "20px", marginBottom: "10px" }}>
          {title}
        </Title>
        <Dialog.Description style={{ fontSize: "16px", marginBottom: "20px" }}>
          Descrição
        </Dialog.Description>
        <RegisterButton style={{ padding: "10px 20px", fontSize: "16px" }}>
          Cadastrar
        </RegisterButton>
        <CloseButton aria-label="Close">×</CloseButton>
      </Content>
    </Dialog.Portal>
  );
};

export default AuthorModal;
