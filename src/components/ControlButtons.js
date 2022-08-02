import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { activate, deactivate } from "../features/timer/timerSlice";

const ControlButtons = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.timer.isActive);

  function handleClick() {
    if (isActive) {
      dispatch(deactivate());
    } else {
      dispatch(activate());
    }
  }
  return (
    <Button off={isActive} onClick={handleClick}>
      <FontAwesomeIcon icon={!isActive ? faPhone : faPhoneSlash} />
    </Button>
  );
};

const Button = styled.button`
  text-align: center;
  font-size: 1em;
  border-radius: 50%;
  height: 3.7rem;
  width: 3.7rem;
  border-radius: 50%;
  color: #f6e8e8;
  background: rgba(38, 245, 90, 0.897);
  box-shadow: 0px 0px 30px rgba(53, 251, 86, 0.438);
  border: none;
  margin: 3rem auto;

  ${(props) =>
    props.off &&
    css`
      background: rgba(255, 38, 38, 0.938);
      box-shadow: 0px 0px 30px rgba(255, 59, 59, 0.863);
    `}
`;

export default ControlButtons;
