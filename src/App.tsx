import MissionButton from "./components/ui/MissionButton";

export default function App() {
  const clickHandler = (message: string) => {
    alert(message);
  };
  return (
    <>
      <MissionButton clickHandler={clickHandler} message="미션 성공!">
        미션 수행
      </MissionButton>
    </>
  );
}
