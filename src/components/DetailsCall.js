import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const DetailsCall = ({ pricePerHour }) => {
  const [price, setPrice] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function activate() {
    setIsActive(true);
    console.log("activae:" + isActive);
    priceHandler();
  }
  function reset() {
    setTimer(0);
    setPrice("R$00,00");
    setIsActive(false);
    console.log("reset:" + isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
        priceHandler();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const priceHandler = () => {
    const pricePerMin = pricePerHour / 60;
    const pricePerSec = pricePerMin / 60;
    const finalPrice = pricePerSec * timer;
    setPrice(`R$${finalPrice.toFixed(2)}`);
    console.log(finalPrice);
  };

  return (
    <div className="detailsCall">
      <h2>{price}</h2>
      <h2>{formatTime()}</h2>
      <Button onClick={activate}>Start</Button>
      <Button onClick={reset}>Stop</Button>
    </div>
  );
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default DetailsCall;
