import { useState } from "react";
import GuestView from "./components/GuestView";
import UserView from "./components/UserView";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <>
      {isLoggedIn ? (
        <UserView loginHandler={loginHandler} />
      ) : (
        <GuestView loginHandler={loginHandler} />
      )}
    </>
  );
}
