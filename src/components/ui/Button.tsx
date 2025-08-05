// React.ReactElement -> JSX문법만 허용
// React.ReactNode -> ReactElement보다 범용적. string, number도 가능해짐
export default function Button({
  clickHandler,
  message,
  children,
}: {
  clickHandler: (message: string) => void;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => clickHandler(message)}>{children}</button>
    </>
  );
}
