import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  padding: 0rem 0rem 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;

  & > ul {
    display: flex;
    padding: 0;
    margin: 0;

    & > li {
      position: relative;
      list-style: none;
      margin: 0 1rem;
      transition: all 0.25s;

      & > a {
        position: relative;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        color: #707070;
        padding: 1rem 0;
        transition: all 0.25s;

        &:hover {
          color: #333;

          &:after {
            width: 100%;
          }
        }

        &.activeLink {
          color: #333;

          &:before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            width: 100%;
            height: 4px;
            background-color: #0073d0;
            border-radius: 6px;
            margin: auto;
            transition: all 0.2s;
          }
        }

        &:after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          width: 0%;
          height: 4px;
          background-color: #0073d0;
          border-radius: 6px;
          margin: auto;
          transition: all 0.2s;
        }
      }
    }
  }
`;

/**
 * Componente de cabeçalho com a navegação do site.
 *
 * Exibe links para as páginas "Home", "Livros" e "Autores"
 * Aplica uma classe activeLink para estilizar o link que
 * está ativo com base no caminho atual da URL.
 *
 * @component
 * @returns {JSX.Element} - O cabeçalho com a navegação.
 */
function Header() {
  const location = useLocation();

  /**
   * Verifica o caminho do link atual.
   *
   * @param {string} path - Caminho a ser verificado.
   * @returns {boolean} `true` se o caminho for o atual, se não retorna `false`.
   */
  const isActive = (path) => location.pathname === path;

  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "activeLink" : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="livros"
              className={isActive("/livros") ? "activeLink" : undefined}
            >
              Livros
            </Link>
          </li>
          <li>
            <Link
              to="autores"
              className={isActive("/autores") ? "activeLink" : undefined}
            >
              Autores
            </Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
