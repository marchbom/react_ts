export default function Button2() {
  const handleClick = (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(message);
    console.log(event);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
    console.log("handleClick 2");
  };
  return (
    <>
      <button onClick={(event) => handleClick("클릭됨!", event)}>클릭</button>
      <button onClick={handleClick2}>클릭2</button>
    </>
  );
}
