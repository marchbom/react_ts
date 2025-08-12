import { twMerge } from "tailwind-merge";

export default function Button() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <button
          className={twMerge(
            `bg-green-500 text-white py-3 px-5 border-none rounded cursor-pointer transition-colors duration-300 hover:bg-green-600`
          )}
        >
          Click Me!
        </button>
      </div>
    </>
  );
}
