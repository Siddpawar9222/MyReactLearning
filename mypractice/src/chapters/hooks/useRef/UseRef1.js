import { useState, useEffect, useRef } from "react";


const UseRef = () => {
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
};

export default UseRef;

/*
- It can be used to store a mutable value(usestate cause re-render) that does not cause a re-render when updated.
- useState cause re-render and UseEffect runs on every render Thats why infinite loop problem occurs
*/