import { MouseEvent, useState } from "react";
import AddWoodCut from "./components/AddWoodCut";

type rect = {
  start: {
    x: number;
    y: number;
  };
  radius: number;
  width: number;
  height: number;
};

type woodCut = {
  width: number;
  height: number;
  thickness: number;
};

function App() {
  console.log("re-render");
  const [woodCutList, setWoodCutList] = useState<woodCut[]>([]);


  const [error, setError] = useState("");

  const [rectParam, setRectParam] = useState<rect>({
    start: { x: 0, y: 0 },
    radius: 100,
    width: 1000,
    height: 1000,
  });

  function addWoodCut(width: number, height: number, thickness: number) {
    setWoodCutList([...woodCutList, { width: width, height: height, thickness: thickness }]);
  }

  function handleWoodForm(e: MouseEvent<HTMLButtonElement, MouseEvent> | any) {
    e.preventDefault();
    inputIsNumber(e.target[0].value, e.target[1].value, e.target[2].value) ? addWoodCut(e.target[0].value, e.target[1].value, e.target[2].value) : setError("invalid input, please only enter valid numbers")
  }

  function inputIsNumber(width: string, height: string, thickness: string) {
    return (!isNaN(Number(width)) && !isNaN(Number(height)) && !isNaN(Number(thickness)));
  }

  function WoodForm() {
    return (
      <div>
        <form
          className="flex flex-col justify-center mt-5 border-solid border-2 border-red-400 [&>*]:py-2 px-4 items-center  [&>*]:[&>*]:px-2 text-black"
          onSubmit={(e) => handleWoodForm(e)}
        >
          <div className="flex flex-col">
            <div className="flex flex-col item  s-start">
              <p>Width:</p>
              <input
                className="px-4 py-2 border rounded"
                type="number"
                defaultValue={0}
                min={1}
              />
            </div>
            <div className="flex flex-col items-start mt-4">
              <p>Height:</p>
              <input
                className="px-4 py-2 border rounded"
                type="number"
                defaultValue={0}
                min={1}


              />
            </div>
            <div className="flex flex-col items-start mt-4">
              <p>Thickness:</p>
              <input
                className="px-4 py-2 border rounded"
                type="number"
                defaultValue={0}
                min={1}

              />
            </div>
          </div>
          <button className="border-solid border-2 border-gray-400 rounded-md p-3 mb-3">
            {" "}
            Add Cut
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <WoodForm />

      {woodCutList.map((e, index) => {
        return (
          <div key={index}>
            Width: {e.width}, Height: {e.height},  Thickness: {e.thickness}
          </div>
        );
      })}
      <svg
        width={rectParam.width + 100}
        height={rectParam.height}
        className="bg-red-100"
      >
        <rect width="1000" height="100" x="50" y="5" fill="yellow" />
        <rect width="1000" height="100" x="50" y="105" fill="blue" />
      </svg>
    </div>
  );
}

export default App;
