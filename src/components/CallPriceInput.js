import { useSelector, useDispatch } from "react-redux";
import { setPrice } from "../features/price/priceSlice";

const CallPriceInput = () => {
  const dispatch = useDispatch();

  let pricePerHour = useSelector((state) => state.price.value);

  let handleInput = (e) => {
    dispatch(setPrice(e.target.value));
  };

  return (
    <>
      <label htmlFor="price">Price/Hour:</label>
      <input
        style={PricePickerStyle}
        id="price"
        name=""
        type="number"
        value={pricePerHour}
        onChange={handleInput}
      />
    </>
  );
};

const PricePickerStyle = {
  width: 70,
  height: 40,
  textAlign: "center",
};

export default CallPriceInput;
