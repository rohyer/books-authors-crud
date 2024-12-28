import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333;
`;

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
