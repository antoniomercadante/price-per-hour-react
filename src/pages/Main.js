import styled from "styled-components";
import BackgroundImg from "../assets/img/background2.jpg";

import Call from "../components/Call";
import User from "../components/User";

function Main() {
  return (
    <Background>
      <Container>
        <User name={"Toni"} />
        <Call />
      </Container>
    </Background>
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
`;

export default Main;
