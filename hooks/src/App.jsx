import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0)
  const prevCount = useRef()
  useEffect(() => {
    prevCount.current = count
  }, [count])
  

  return (
    <>
      <h2>Current Count : {count}</h2>
      <h3>previes Count : {prevCount.current}</h3>
      
      <button onClick={() => setCount((prev) => prev + 1)} >Increase</button>
    </>
  );
}

export default App;
