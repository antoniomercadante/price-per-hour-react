const CallPriceInput = ({ pricePerHour, pricePerHourHandler }) => {
  return (
    <form>
      <label htmlFor="price">Price/Hour:</label>
      <input
        style={PricePickerStyle}
        id="price"
        name=""
        type="number"
        value={pricePerHour}
        onChange={pricePerHourHandler}
      />
    </form>
  );
};

const PricePickerStyle = {
  width: 70,
  height: 40,
  textAlign: "center",
};

export default CallPriceInput;
