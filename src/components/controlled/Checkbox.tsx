import { useState } from "react";

export default function Checkbox() {
  const [chk, setChk] = useState(false);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChk(e.target.checked);
  };

  const [chk2, setChk2] = useState(false);

  const handleCheckChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChk2(e.target.checked);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="item1"
          checked={chk}
          onChange={handleCheckChange}
        />
        <label htmlFor="item1">
          아이템 1 {chk ? "선택됨" : "선택되지 않음"}
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="item2"
          checked={chk2}
          onChange={handleCheckChange2}
        />
        <label htmlFor="item2">
          아이템 2 {chk2 ? "선택됨" : "선택되지 않음"}
        </label>
      </div>
    </>
  );
}
