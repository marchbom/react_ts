export default function UserView({ loginHandler }: { loginHandler: () => void }) {
  return (
    <>
      <h1>환영합니다! 🎉"</h1>
      <button onClick={loginHandler}>로그아웃</button>
    </>
  );
}
