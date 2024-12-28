import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  padding: 1rem;
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
      padding: 1rem 0;
      transition: all 0.25s;

      &:hover {
        & > a {
          color: #333;
        }

        &:after {
          width: 100%;
        }

        & > ul {
          opacity: 1;
          pointer-events: all;
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

      &:nth-child(4) {
        &:hover {
          &:after {
            width: 140px;
          }
        }
      }

      & > a {
        position: relative;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        color: #707070;
        transition: all 0.25s;
      }
    }
  }
`;

const SecondLevel = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  opacity: 0;
  pointer-events: none;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px #717171;
  padding: 15px 0;
  gap: 15px;
  width: 140px;
  margin: 0;
  transition: all 0.25s;

  & > li {
    list-style: none;

    & > a {
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      color: #707070;
      padding: 0px 20px;
      transition: all 0.25s;

      &:hover {
        color: #333;
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="livros">Livros</Link>
          </li>
          <li>
            <Link to="autores">Autores</Link>
          </li>
          <li>
            <Link to="#">Cadastrar</Link>

            <SecondLevel>
              <li>
                <a href="#">Livro</a>
              </li>
              <li>
                <a href="#">Autor</a>
              </li>
            </SecondLevel>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
