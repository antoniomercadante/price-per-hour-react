import DetailsCall from "./DetailsCall";
import { useState } from "react";
import styled, { css } from "styled-components";

const StartCall = () => {
  const [pricePerHour, setPricePerHour] = useState(0);

  const pricePerHourHandler = (e) => {
    setPricePerHour(e.target.value);
  };

  const PricePicker = () => {
    return <input style={PricePickerStyle}
    value={pricePerHour}
    onChange={pricePerHourHandler}
    type="number"
    name=""
    id="" />
  }

  return (
    <div className="startCall">
      <Call>
        <SetPrice>
          <h2>Price/Hour:</h2>
          <form>
            <PricePicker/>
          </form>
        </SetPrice>
      </Call>
      <DetailsCall pricePerHour={pricePerHour} />
    </div>
  );
};

const Call = styled.div`
  background: rgb(0, 0, 0);
  padding: 1.6rem 0rem;
  margin: 0rem 0 4rem 0rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px 0 rgba(109, 109, 122, 0.329);
`;

const SetPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  h2 {
    text-shadow: 2px 2px 16px rgba(206, 200, 200, 0.767);
  }
`;

const PricePickerStyle = ({
  width: 70,
  height: 40,
  textAlign: "center"
})

export default StartCall;
