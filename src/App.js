//useState and useEffect import
import { useState } from "react";

import styled, { css } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

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
      <GlobalStyle />
      <Container>
        <UserName name={name} />
        <StartCall />
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 80vh;
  width: 360px;
  margin: auto;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default App;
