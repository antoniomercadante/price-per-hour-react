import { useEffect } from "react";
import styled from "styled-components";
import BackgroundImgBtn from "../assets/img/background.jpg";
import { formatTime, priceHandler } from "../utils/TimerUtils";

import ControlButtons from "./ControlButtons";

import { useDispatch, useSelector } from "react-redux";
import { incrementSecond } from "../features/timer/timerSlice";

const CallDetails = () => {
  const dispatch = useDispatch();

  const pricePerHour = useSelector((state) => state.price.value);
  const isActive = useSelector((state) => state.timer.isActive);
  const timer = useSelector((state) => state.timer.value);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        dispatch(incrementSecond());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [dispatch, isActive, timer]);

  return (
    <CallWrapper>
      <Details>
        <Info className="price">{priceHandler(pricePerHour, timer)}</Info>
        <Info className="time">{formatTime(timer)}</Info>
      </Details>
      <ControlButtons />
    </CallWrapper>
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
  background: url(${BackgroundImgBtn});
  background-size: cover;
  filter: brightness(0.9);
  text-align: center;
  font-size: 1.4em;
  border-radius: 4rem;
  padding: 1rem;
`;

export default CallDetails;
