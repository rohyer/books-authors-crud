import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  padding: 1rem 1rem 1.5rem;
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

        /* & > ul {
          opacity: 1;
          pointer-events: all;
        } */
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

      /* &:nth-child(4) {
        &:hover {
          &:after {
            width: 140px;
          }
        }
      } */

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
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
