import CallDetails from "./CallDetails";
import { useState } from "react";
import styled, { css } from "styled-components";

const Call = () => {
  const [pricePerHour, setPricePerHour] = useState(0);

  const pricePerHourHandler = (e) => {
    setPricePerHour(e.target.value);
  };

  const PriceInput = () => {
    return (
      <form>
        <label htmlFor="price">Price/Hour:</label>
        <input style={PricePickerStyle}
          id="price"
          name=""
          type="number"
          value={pricePerHour}
          onChange={pricePerHourHandler}
        />
      </form>
    )
  }

  return (
    <>
      <PriceInputContainer>
        <PriceInput />
      </PriceInputContainer>
      <CallDetails pricePerHour={pricePerHour} />
    </>
  );
};


const PriceInputContainer = styled.div`
  background: red;
  padding: 1.6rem 0rem;
  margin: 0rem 0 4rem 0rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px 0 rgba(109, 109, 122, 0.329);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  label {
    text-shadow: 2px 2px 16px rgba(206, 200, 200, 0.767);
  }
`;

const PricePickerStyle = ({
  width: 70,
  height: 40,
  textAlign: "center"
})

export default Call;
