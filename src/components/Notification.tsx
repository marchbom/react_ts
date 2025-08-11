export default function Notification({ notiHandler }: { notiHandler: () => void }) {
  return (
    <>
      <h1 className="font-bold">📢 새로운 알림이 도착했습니다!</h1>
      <button onClick={notiHandler}>알림 닫기</button>
    </>
  );
}
