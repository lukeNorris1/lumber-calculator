import { MouseEvent, useEffect, useState } from "react";

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
  const [nominalWidth, setnNominalWidth] = useState<number>(1);
  const [nominalHeight, setnNominalHeight] = useState<number>(1);
  const [rectMaxWidth, setRectMaxWidth] = useState<number>(0)
  let totalHeight = 0;

  useEffect(() => {
    console.log(`wood cut list lenght: ${woodCutList.length}`);
  }, [woodCutList]);

  function addWoodCut(width: number, height: number, thickness: number) {
    setWoodCutList([
      ...woodCutList,
      { width: width, height: height, thickness: thickness },
    ]);
  }

  function handleWoodForm(e: MouseEvent<HTMLButtonElement, MouseEvent> | any) {
    e.preventDefault();
    inputIsNumber(e.target[0].value, e.target[1].value, e.target[2].value)
      ? addWoodCut(
          parseInt(e.target[0].value),
          parseInt(e.target[1].value),
          parseInt(e.target[2].value)
        )
      : setError("invalid input, please only enter valid numbers");
  }

  function inputIsNumber(width: string, height: string, thickness: string) {
    return (
      !isNaN(Number(width)) &&
      !isNaN(Number(height)) &&
      !isNaN(Number(thickness))
    );
  }

  console.log(
    `window width: ${top?.innerWidth}, window height: ${window.outerHeight}`
  );

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
          <div>
            <button className="border-solid border-2 border-gray-400 rounded-md p-3 mb-3">
              {" "}
              Add Cut
            </button>
            <button
              className="border-solid border-2 border-gray-400 rounded-md p-3 ml-5 mb-3"
              onClick={() => setWoodCutList([])}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }

  const svgWidth = 1000
  const rectXOffset = 20
  const yPaddingOffset = 10
  const yTextOffset = 30
  const xTextOffset = 25
  // 

  function checkMaxWidth(compareNumber: number)}{

    

  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <WoodForm />

      {woodCutList.map((e, index) => {
        return (
          <div key={index}>
            Width: {e.width}, Height: {e.height}, Thickness: {e.thickness}
          </div>
        );
      })}
      {/* RectXOffeset * 2 = 4% of total. 2% left and 2% right as padding 
        so width of any rect inside is 100% - 4% and since it starts at 2% it has to be 96% wide at maximum
      */}
      <svg
        width={svgWidth + (rectXOffset * 2)}
        height={
          woodCutList.reduce((total, current) => total + current.height, 0) *
            nominalHeight +
          60
        }
        className="bg-red-100"
      >
       <rect
                width={`${96}%`}
                height="20%"
                x={`2%`}
                y={10}
                fill={"red"}
            />
        {woodCutList.map((cut, index) => {
          totalHeight += cut.height;
          return (
            <>
              <rect
                width={cut.width}
                height={cut.height}
                x={rectXOffset}
                y={totalHeight - cut.height + yPaddingOffset * index + yPaddingOffset}
                fill={index % 2 == 0 ? "red" : "green"}
              />
              <text
                x={(cut.width / 2) + rectXOffset/2}
                y={totalHeight - cut.height + yPaddingOffset * index + yTextOffset}
                className=""
              >
                {cut.width}
              </text>
              <text
                x={xTextOffset}
                y={totalHeight - cut.height + yTextOffset + cut.height / 2}
                className=""
              >
                {cut.height}
              </text>
            </>
          );
        })}
      </svg>
    </div>
  );
}

export default App;
