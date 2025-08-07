import { useState } from "react";
import LoginStatus from "./components/LoginStatus";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <>
      <LoginStatus isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
    </>
  );
}
