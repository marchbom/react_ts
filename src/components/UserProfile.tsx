export default function UserProfile({
  userObj,
}: {
  userObj: { name: string; age: number; isAdmin: boolean };
}) {
  return (
    <>
      <p>이름 : {userObj.name}</p>
      <p>나이 : {userObj.age}</p>
      <p>관리자 : {userObj.isAdmin ? "관리자입니다" : "관리자가 아닙니다"}</p>
    </>
  );
}
