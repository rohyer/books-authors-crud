import styled from "styled-components";

const StyledFormMessageSuccess = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #00aa00;
  margin: 10px 0px 0px;
`;

/**
 * Componente de mensagem de sucesso para formulários.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - A mensagem de sucesso.
 * @returns {JSX.Element} - Um parágrafo com a mensagem de sucesso.
 */
const FormMessageSuccess = ({ title }) => {
  return <StyledFormMessageSuccess>{title}</StyledFormMessageSuccess>;
};

export default FormMessageSuccess;
