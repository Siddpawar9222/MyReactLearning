import { useEffect, useState, useRef } from "react";
//import ComponentB from "./ComponentB";
const ComponentA = () => { 
     
  const [inputValue, setInputValue] = useState("");
  let normalCount = 0 ;
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    normalCount ++;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count with normalCount: {normalCount}</h1>
      <h1>Render Count with useRef: {count.current}</h1>
    </>
  );
}

export default ComponentA;
