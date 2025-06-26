import PrintValue from "./components/PrintValue";

export default function App() {
  const numberValue = 32;
  const stringValue = "Hello World!";
  const booleanValue = true;
  const arrayValue = [1, 2, 3, 4];
  const objectValue = { name: "sucoding", age: 30 };
  const handleClick = () => alert("클릭됨!");
  return (
    <>
      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />
    </>
  );
}
