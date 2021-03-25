import DetailsCall from "./DetailsCall";
import { useState } from "react";

const StartCall = () => {
  const [pricePerHour, setPricePerHour] = useState(0);

  const pricePerHourHandler = (e) => {
    setPricePerHour(e.target.value);
  };

  return (
    <div className="startCall">
      <h2>Price/Hour:</h2>
      <form>
        <input
          value={pricePerHour}
          onChange={pricePerHourHandler}
          type="number"
          name=""
          id=""
        />
      </form>
      <DetailsCall pricePerHour={pricePerHour} />
    </div>
  );
};

export default StartCall;
