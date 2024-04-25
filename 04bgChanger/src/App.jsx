import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");


  return (
    <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center top-5 m-2 p-2 inset-x-0 ">
        <div className=" flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-full shadow-lg ">
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "red"}} onClick={()=> setColor("red")}>
             Red
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "black"}} onClick={()=> setColor("black")}>
             Black
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>
             Purple
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "green"}} onClick={()=> setColor("green")}>
             Green
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-black" style= {{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>
             Yellow
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "violet"}} onClick={()=> setColor("violet")}>
             Violet
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "orange"}} onClick={()=> setColor("orange")}>
             Orange
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-black" style= {{backgroundColor: "white"}} onClick={()=> setColor("white")}>
             White
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "grey"}} onClick={()=> setColor("grey")}>
             Grey
          </button>
          <button className=" rounded-full py-2 px-4 shadow-sm text-white" style= {{backgroundColor: "olive"}} onClick={()=> setColor("olive")}>
             Olive
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default App
