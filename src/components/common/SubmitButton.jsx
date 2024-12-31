import styled from "styled-components";

const StyledSubmitButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  background-color: #0073d0cc;
  padding: 10px 20px;
  margin-top: 15px;
  transition: all 0.3s;

  &:hover {
    background-color: #0073d0ff;
  }
`;

const SubmitButton = ({ onClick }) => {
  return (
    <StyledSubmitButton type="submit" onClick={onClick}>
      Cadastrar
    </StyledSubmitButton>
  );
};

export default SubmitButton;
