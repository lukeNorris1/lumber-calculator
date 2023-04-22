import { useState } from "react";
import AddWoodCut from "./components/AddWoodCut";

  type rect = {
    start: {
      x: number,
      y: number,
    },
    radius: number,
    width: number,
    height: number,

  }

  type woodCut = {
    width: number,
    height: number,
    thickness: number
}

function App() {
  const [woodCutList, setWoodCutList] = useState<woodCut[]>([])

  const [rectParam, setRectParam] = useState<rect>({
    start: {x: 100, y: 100},
    radius: 100,
    width: 2000,
    height: 2000
  })

  function addWoodCut(){
      setWoodCutList([...woodCutList, {width: 50, height: 50, thickness: 50}])
  }

  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AddWoodCut addtoCut={setwoodCutList}/>

      <svg width={rectParam.width} height={rectParam.height} className="bg-red-100">
        {/* <circle
          cx={rectParam.start.x}
          cy={rectParam.start.y}
          r={rectParam.radius}
          stroke="green"
          stroke-width="4"
          fill="yellow"
        /> */}
         <rect width="1000" height="100" x="500" y="500" fill="yellow" />
      </svg>
    </div>
  );
}

export default App;
