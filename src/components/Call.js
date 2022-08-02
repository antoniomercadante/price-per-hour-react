import styled from "styled-components";
import CallDetails from "./CallDetails";
import CallPriceInput from "./CallPriceInput";

const Call = () => {
  return (
    <>
      <PriceInputContainer>
        <CallPriceInput />
      </PriceInputContainer>
      <CallDetails />
    </>
  );
};

const PriceInputContainer = styled.div`
  background: rgba(22, 22, 22, 0.95);
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
