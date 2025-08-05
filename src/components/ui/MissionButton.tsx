export default function MissionButton({
  message,
  children,
  clickHandler,
}: {
  message: string;
  children: React.ReactNode;
  clickHandler: (message: string) => void;
}) {
  return (
    <>
      <button onClick={() => clickHandler(message)}>{children}</button>
    </>
  );
}
