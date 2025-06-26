export default function PrintValue({
  numberValue,
  stringValue,
  booleanValue,
  arrayValue,
  objectValue,
  handleClick,
}: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  return (
    <>
      <div>number: {numberValue}</div>
      <div>string: {stringValue}</div>
      <div>boolean: {booleanValue.toString()}</div>
      <div>array: {arrayValue}</div>
      <div>object: {JSON.stringify(objectValue)}</div>
      <div>function: {handleClick.toString()}</div>
    </>
  );
}
