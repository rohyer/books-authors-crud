import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333;
`;

/**
 * Componente que renderiza um título.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - O texto do título.
 * @returns {JSX.Element} - O Título.
 */
const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
