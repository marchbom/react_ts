export default function Table() {
  // 버블링 전파로 인해 td만 클릭하더라도 table까지 호출되어버린다.
  // onClickCapture를 사용하면 table -> td 순서로 이벤트가 발생함
  return (
    <>
      <table border={1} onClickCapture={() => console.log("table")}>
        <tbody onClickCapture={() => console.log("tbody")}>
          <tr onClickCapture={() => console.log("tr")}>
            <td
              onClickCapture={(event) => {
                // 이벤트 전파를 막기위한 처리
                event.stopPropagation();
                console.log("td");
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
