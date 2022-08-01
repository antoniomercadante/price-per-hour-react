const CallPriceInput = ({ pricePerHour, pricePerHourHandler }) => {
  return (
    <>
      <label htmlFor="price">Price/Hour:</label>
      <input
        style={PricePickerStyle}
        id="price"
        name=""
        type="number"
        value={pricePerHour}
        onChange={pricePerHourHandler}
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
