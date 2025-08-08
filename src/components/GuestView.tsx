export default function GuestView({ loginHandler }: { loginHandler: () => void }) {
  return (
    <>
      <h1>로그인이 필요합니다. 🔐</h1>
      <button onClick={loginHandler}>로그인</button>
    </>
  );
}
