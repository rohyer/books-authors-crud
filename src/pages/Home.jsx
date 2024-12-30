import styled, { keyframes } from "styled-components";
import ArrowDown from "../assets/arrow-down.svg";

const animeUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;

const animeUp2 = keyframes`
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
  max-width: 1280px;
  width: 100%;
  text-align: center;
  margin: 20px auto;
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
  animation: ${animeUp} 0.8s 0.4s forwards;

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
  transform: translateY(30px);
  animation: ${animeUp} 0.8s 0.4s forwards;

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
  animation: ${animeUp} 0.8s 1.2s forwards;

  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 20px;
  height: auto;
  opacity: 0;
  animation: ${animeLoop} 2s ease-in-out infinite,
    ${animeUp2} 0.8s 1.2s forwards;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <StyledHome>
      <Title>Online Library</Title>
      <Subtitle>Seja bem-vindo a sua Biblioteca Personalizada!</Subtitle>
      <Text>Cadastre seus livros e autores preferidos!</Text>
      <Img src={ArrowDown} alt="Seta para baixo" />
    </StyledHome>
  );
};

export default Home;
