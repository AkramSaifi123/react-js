import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-amber-100 p-2 rounded-3xl gap-2 shadow-lg">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{backgroundColor : "red"}}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1  rounded-full text-white"
          style={{backgroundColor : "green"}}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1  rounded-full text-white"
          style={{background: "blue"}}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{backgroundColor : "olive"}}
        >
          olive
        </button>
        <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1  rounded-full text-white"
          style={{backgroundColor : "black"}}
        >
          Black
        </button>
        <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1  rounded-full text-blacks"
          style={{background: "White"}}
        >
          White
        </button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1  rounded-full text-black"
          style={{backgroundColor : "pink"}}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1  rounded-full text-white"
          style={{backgroundColor : "purple"}}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1  rounded-full text-black"
          style={{backgroundColor : "lavender"}}
        >
          Lavender
        </button>
        <button
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1  rounded-full text-white"
          style={{backgroundColor : "gray"}}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1  rounded-full text-black"
          style={{backgroundColor : "yellow"}}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
