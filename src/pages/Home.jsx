import styled from "styled-components";

const StyledHome = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333333;
`;

const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #333333;
`;

const Home = () => {
  return (
    <StyledHome>
      <Title>Online Library</Title>
      <Subtitle>Seja bem-vindo a sua Biblioteca Personalizada!</Subtitle>
    </StyledHome>
  );
};

export default Home;
