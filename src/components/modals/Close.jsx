import styled from "styled-components";
import { DialogClose } from "@radix-ui/react-dialog";

const StyledModalClose = styled(DialogClose)`
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

/**
 * Componente que renderiza um botão de fechamento para modal
 * criado com DialogClose do Radix UI.
 *
 * @component
 * @returns {JSX.Element} - Um botão.
 */
const ModalClose = () => {
  return <StyledModalClose aria-label="Close">×</StyledModalClose>;
};

export default ModalClose;
