export default function LoginStatus({
  isLoggedIn,
  loginHandler,
}: {
  isLoggedIn: boolean;
  loginHandler: () => void;
}) {
  if (isLoggedIn)
    return (
      <>
        <h1>환영합니다, 사용자!</h1>
        <button onClick={loginHandler}>logout</button>
      </>
    );
  else
    return (
      <>
        <h1>로그인이 필요합니다.</h1>
        <button onClick={loginHandler}>login</button>
      </>
    );
}
