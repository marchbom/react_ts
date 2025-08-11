export default function Recipe({
  id,
  name,
  ingredients,
  deleteHandler,
}: {
  id: string;
  name: string;
  ingredients: string[];
  deleteHandler: (id: string) => void;
}) {
  return (
    <>
      <div key={id}>
        <p className="text-xl">Menu : {name}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <button
          onClick={() => deleteHandler(id)}
          className="rounded-lg bg-blue-400 text-white px-5 mt-2 mb-4 cursor-pointer"
        >
          삭제
        </button>
      </div>
    </>
  );
}
