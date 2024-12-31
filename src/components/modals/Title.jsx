import styled from "styled-components";
import { DialogTitle } from "@radix-ui/react-dialog";

const StyledModalTitle = styled(DialogTitle)`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  color: #444;
  margin-bottom: 10px;
`;

const ModalTitle = ({ title }) => {
  return <StyledModalTitle>{title}</StyledModalTitle>;
};

export default ModalTitle;