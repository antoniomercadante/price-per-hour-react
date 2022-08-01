import { useState, useEffect } from "react";
import BackgroundImgBtn from "../assets/img/background.jpg";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { formatTime, priceHandler } from "../utils/TimerUtils";


const CallDetails = ({ pricePerHour }) => {
  const [price, setPrice] = useState("R$ 0,00");
  const [timer, setTimer] = useState(55);
  const [isActive, setIsActive] = useState(false);


  function reset() {
    setPrice("R$ 0,00");
    setTimer(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
        setPrice(priceHandler(pricePerHour, timer));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);



  return (
    <CallWrapper>
      <Details>
        <Info className="price">{price}</Info>
        <Info className="time">{formatTime(timer)}</Info>
      </Details>
      <ButtonContainer>
        <Button
          off={isActive}
          onClick={!isActive ? () => setIsActive(true) : reset}>
          <FontAwesomeIcon icon={!isActive ? faPhone : faPhoneSlash} />
        </Button>
      </ButtonContainer>
    </CallWrapper >
  );
};

const CallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .price {
    color: rgba(38, 245, 90, 0.897);
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Info = styled.h2`
  /* background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 32, 33, 0.9752275910364145) 54%,
    rgba(98, 98, 98, 1) 96%
  ); */
  background: url(${BackgroundImgBtn});
  background-size: cover;
  filter: brightness(0.9);
  text-align: center;
  font-size: 1.4em;
  border-radius: 4rem;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;

const Button = styled.button`
  text-align: center;
  font-size: 1em;
  border-radius: 50%;
  height: 3.6rem;
  width: 3.6rem;
  border-radius: 50%;
  color: #f6e8e8;
  background: rgba(38, 245, 90, 0.897);
  box-shadow: 0px 0px 30px rgba(53, 251, 86, 0.438);
  border: none;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.off &&
    css`
      background: rgba(255, 38, 38, 0.938);
      box-shadow: 0px 0px 30px rgba(255, 59, 59, 0.863);
    `}
`;

export default CallDetails;
