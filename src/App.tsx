import { useState } from "react";
import TrafficLight from "./components/TrafficLight";

export default function App() {
  const [status, setStatus] = useState("RED");

  const handleStatus = () => {
    switch (status) {
      case "RED":
        setStatus("YELLOW");
        break;
      case "YELLOW":
        setStatus("GREEN");
        break;
      case "GREEN":
        setStatus("RED");
        break;
      default:
        setStatus("RED");
    }
  };
  return (
    <>
      <TrafficLight status={status} handleStatus={handleStatus} />
    </>
  );
}
