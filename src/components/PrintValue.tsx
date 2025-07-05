export default function PrintValue(props: PrintValue) {
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
