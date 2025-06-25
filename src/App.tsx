export default function App() {
  const reArray = [1, 2, 3, 4];
  const reObject = { name: "bomin", age: 20 };
  const reFunction = () => "리턴값";
  const reDate = new Date();
  const reRegExp = /react/i;
  const ReMap = new Map<string, string>([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const ReSet = new Set<number>([1, 2, 3, 4]);

  return (
    <>
      <h2>참조값</h2>
      <p>배열 : {reArray}</p>
      <p>객체 : {JSON.stringify(reObject)}</p>
      <p>함수 : {reFunction.toString()}</p>
      <p>Date: {reDate.toString()}</p>
      <p>정규식 : {reRegExp.toString()}</p>
      <p>Map: {JSON.stringify(Array.from(ReMap))}</p>
      <p>Set : {JSON.stringify(Array.from(ReSet))}</p>
    </>
  );
}
