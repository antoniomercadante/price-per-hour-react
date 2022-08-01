import CallPriceInput from "./CallPriceInput";
import CallDetails from "./CallDetails";
import { useState } from "react";
import styled, { css } from "styled-components";

const Call = () => {
  const [pricePerHour, setPricePerHour] = useState(0);

  const pricePerHourHandler = (e) => {
    setPricePerHour(e.target.value);
  };

  return (
    <>
      <PriceInputContainer>
        <CallPriceInput
          pricePerHour={pricePerHour}
          pricePerHourHandler={pricePerHourHandler}
        />
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

export default Call;
