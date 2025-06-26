export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  console.log(props);
  return (
    <>
      <div>number: {props.numberValue}</div>
      <div>string: {props.stringValue}</div>
      <div>boolean: {props.booleanValue.toString()}</div>
      <div>array: {props.arrayValue}</div>
      <div>object: {JSON.stringify(props.objectValue)}</div>
      <div>function: {props.handleClick.toString()}</div>
    </>
  );
}
