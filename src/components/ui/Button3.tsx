export default function Button3({
  handleClick,
}: {
  handleClick: (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick("hello", event)}>click</button>
    </>
  );
}
