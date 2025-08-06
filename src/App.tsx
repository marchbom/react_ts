import { useState } from "react";

export default function App() {
  const [name, setName] = useState("jack");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const stateHandler = () => {
    setName("bomin");
    setAge(20);
    setGender("female");
  };
  return (
    <>
      <h1>name : {name}</h1>
      <h1>age: {age}</h1>
      <h1>gender: {gender}</h1>
      <button onClick={stateHandler}>change state</button>
    </>
  );
}
