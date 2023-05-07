import { useState } from "react";

type woodCut = {
  width: number;
  height: number;
  thickness: number;
};

export default function AddWoodCut({addWoodCut}) {
  const [woodCut, setWoodCut] = useState();

  function submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    addWoodCut({width: 50, height: 50, thickness: 50});
  }
  return (
    <div>
      <form className="flex flex-col justify-center mt-5 border-solid border-2 border-red-400 [&>*]:py-2 px-4 items-center  [&>*]:[&>*]:px-2 text-black">
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <p>Width:</p>
            <input
              className="px-4 py-2 border rounded"
              type="number"
              placeholder="Input 1"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p>Height:</p>
            <input
              className="px-4 py-2 border rounded"
              type="number"
              placeholder="Input 2"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <p>Thickness:</p>
            <input
              className="px-4 py-2 border rounded"
              type="number"
              placeholder="Input 3"
            />
          </div>
        </div>
        <button className="border-solid border-2 border-gray-400 rounded-md p-3 mb-3" onClick={(e) => submitHandler(e)}> Click me</button>
      </form>
    </div>
  );
}
