export default function TrafficLight({
  status,
  handleStatus,
}: {
  status: string;
  handleStatus: () => void;
}) {
  let text = "";
  let color = "";
  switch (status) {
    case "RED":
      color = "bg-red-600";
      text = "멈춤";
      break;
    case "YELLOW":
      color = "bg-amber-300";
      text = "일단멈춤";
      break;
    case "GREEN":
      color = "bg-green-600";
      text = "건너라";
      break;
    default:
      return "RED";
  }

  return (
    <>
      <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center`}>
        <p className="text-center text-white">{text}</p>
      </div>
      <br />
      <button
        onClick={handleStatus}
        className=" text-white bg-gray-700 px-4 py-1 rounded-xl cursor-pointer"
      >
        신호변경
      </button>
    </>
  );
}
