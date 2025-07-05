import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";

export default function App() {
  const userObj = {
    name: "Alice",
    age: 30,
    isAdmin: true,
  };
  return (
    <>
      <UserProfile userObj={userObj} />
      <UserProfile2>
        <>
          <p>이름 : Bob</p>
          <p>나이 : 30</p>
          <p>관리자가 아닙니다.</p>
        </>
      </UserProfile2>
    </>
  );
}
