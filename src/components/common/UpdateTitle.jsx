import { useEffect } from "react";

/**
 * Componente responsável por atualizar o document.title.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - O título.
 * @returns {null} - Esse componente não renderiza nada na tela.
 */
const UpdateTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default UpdateTitle;
