import { useState, useRef, useEffect } from "react";

const UseRef2 = () => {
  const [input, setInput] = useState("");

  const preState = useRef("Nothing");

  useEffect(() => {
    console.log(preState.current);
    preState.current = input;
  });

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <h4>Current state is {input}</h4>
      <h4>Previous State was {preState.current}</h4>
    </div>
  );
};

export default UseRef2;

/*
-The useRef Hook allows you to persist values between renders.
-When re-render happen first useEffect loads it set the value of preState and input is changed.
*/
