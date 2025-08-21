import { useState } from "react";
import lampoff from "../assets/images/lamp_off.png";
import lampOn from "../assets/images/lamp_on.png";
export default function Lamp() {
  const [isLamp, setIsLamp] = useState(false);

  const toggleHandler = () => {
    setIsLamp((prev) => !prev);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!isLamp && <img src={lampoff} onClick={toggleHandler} />}
        {isLamp && <img src={lampOn} onClick={toggleHandler} />}
      </div>
    </>
  );
}
