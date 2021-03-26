//useState and useEffect import
import { useState } from "react";
//style things
import styled, { css } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import BackgroundImg from "./img/background2.jpg";

//components import
import PriceCall from "./components/PriceCall";
import StartCall from "./components/StartCall";
import TimeCall from "./components/TimeCall";
import UserName from "./components/UserName";

//main app
function App() {
  const name = "Toni";
  return (
    <div>
      <Background>
        <Container>
          <UserName name={name} />
          <StartCall />
        </Container>
      </Background>
      <GlobalStyle />
    </div>
  );
}

const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  min-height: 500px;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 360px;
  padding: 1rem;
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.507);
  border: 1px rgba(255, 255, 255, 0.4) solid;
  box-shadow: 0 4px 16px 0 rgba(109, 109, 122, 0.329);

  /* 
  backdrop-filter: blur(7px);
  background-color: rgba(38, 38, 39, 0.267);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18); */
`;

export default App;
