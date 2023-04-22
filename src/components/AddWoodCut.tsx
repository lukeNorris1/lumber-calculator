import { useState } from "react"

type woodCut = {
    width: number,
    height: number,
    thickness: number
}

export default function AddWoodCut(addToCut:any) {
    const [woodCut, setWoodCut] = useState()
    

    function submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        addToCut((cut: string | number | null) => cut += woodCut )
        
    }
  return (
    <div>
        <form>
            <input type="text" placeholder="Add wood cut"/>
            <button onClick={e => submitHandler(e)}> Click me</button>
        </form>
  </div>
  )
}
