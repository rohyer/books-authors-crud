import styled from "styled-components";

const StyledMessageError = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #ff0000;
  margin: 10px 0px 0px;
`;

const FormMessageError = ({ title }) => {
  return <StyledMessageError>{title}</StyledMessageError>;
};

export default FormMessageError;
