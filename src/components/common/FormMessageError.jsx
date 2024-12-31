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

/**
 * Componente de mensagem de erro para formulários.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - A mensagem de erro.
 * @returns {JSX.Element} - Um parágrafo com a mensagem de erro.
 */
const FormMessageError = ({ title }) => {
  return <StyledMessageError>{title}</StyledMessageError>;
};

export default FormMessageError;
