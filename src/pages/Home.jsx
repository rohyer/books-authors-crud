import styled, { keyframes } from "styled-components";
import ArrowDown from "../assets/arrow-down.svg";
import Plus from "../assets/plus.svg";
import * as Dialog from "@radix-ui/react-dialog";
import ModalCreate from "../components/modals/ModalCreate";
import { useState } from "react";

const anime1 = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;

const anime2 = keyframes`
  to {
    opacity: initial;
  }
`;

const animeLoop = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  text-align: center;
  margin: 0px auto;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333333;
  opacity: 0;
  transform: translateY(30px);
  animation: ${anime1} 0.8s 0.4s forwards;

  @media (max-width: 575px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333333;
  opacity: 0;
  margin: 0;
  transform: translateY(30px);
  animation: ${anime1} 0.8s 0.4s forwards;

  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

const Text = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333333;
  opacity: 0;
  transform: translateY(30px);
  animation: ${anime1} 0.8s 1.2s forwards;

  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const ButtonsSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    pointer-events: none;
    position: absolute;
    font-family: "Montserrat", sans-serif;
    color: #333333;
    background-color: #ffffff;
    border: 1px solid #444;
    border-radius: 6px;
    opacity: 0;
    transition: all 0.25s;

    &:hover {
      color: #ffffff;
      background-color: #0073d0;
    }

    &.active {
      pointer-events: all;

      &:nth-child(2) {
        opacity: 1;
        transform: translateX(-15px);
      }
      &:nth-child(3) {
        opacity: 1;
        transform: translateX(15px);
      }
    }
  }
`;

const ArrowImg = styled.img`
  width: 20px;
  height: auto;
  opacity: 0;
  animation: ${animeLoop} 2s ease-in-out infinite, ${anime2} 0.8s 1.2s forwards;
  margin-top: 20px;
`;

const PlusImg = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.2s;
  animation: ${anime2} 0.8s 1.2s forwards;

  &.inactive {
    background-color: #0073d0;
  }

  &.active {
    background-color: #db0000;
    transform: rotate(135deg);
  }
`;

const Home = () => {
  const [buttonState, setButtonState] = useState(false);

  const handleClick = () => {
    setButtonState((prevButtonState) => !prevButtonState);
  };

  return (
    <StyledHome>
      <Title>Online Library</Title>
      <Subtitle>Seja bem-vindo a sua Biblioteca Personalizada!</Subtitle>
      <Text>Cadastre seus livros e autores preferidos!</Text>
      <ArrowImg src={ArrowDown} alt="Seta para baixo" />

      <ButtonsSection>
        <PlusImg
          onClick={handleClick}
          src={Plus}
          alt="Botão de cadastro"
          className={buttonState ? "active" : "inactive"}
        />

        <Dialog.Root>
          <Dialog.Trigger asChild style={{ textAlign: "center" }}>
            <button
              onClick={handleClick}
              style={{ left: "-100px" }}
              className={buttonState ? "active" : "inactive"}
            >
              Livro
            </button>
          </Dialog.Trigger>

          <ModalCreate title="Cadastro de Livro" type="book" />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild style={{ textAlign: "center" }}>
            <button
              onClick={handleClick}
              style={{ right: "-106px" }}
              className={buttonState ? "active" : "inactive"}
            >
              Autor
            </button>
          </Dialog.Trigger>

          <ModalCreate title="Cadastro de Autor" type="author" />
        </Dialog.Root>
      </ButtonsSection>
    </StyledHome>
  );
};

export default Home;
