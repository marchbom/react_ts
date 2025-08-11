import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FruitList() {
  const items = ["사과", "바나나", "오렌지"];
  const [fruits, setFruits] = useState(() =>
    items.map((item) => ({
      id: uuidv4(),
      value: item,
    }))
  );
  const [disabled, setDisabled] = useState(false);

  const addListHandler = () => {
    setFruits([{ id: uuidv4(), value: "포도" }, ...fruits]);
    setDisabled(true);
  };
  return (
    <>
      <h1>FruitList</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.value}</li>
        ))}
      </ul>
      <button
        onClick={addListHandler}
        disabled={disabled}
        className={`${disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} `}
      >
        과일 추가
      </button>
    </>
  );
}
