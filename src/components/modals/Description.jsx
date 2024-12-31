import styled from "styled-components";
import { DialogDescription } from "@radix-ui/react-dialog";

const StyledModalDescription = styled(DialogDescription)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #333;
  margin-bottom: 15px;
`;

const ModalDescription = ({ children }) => {
  return <StyledModalDescription>{...children}</StyledModalDescription>;
};

export default ModalDescription;
