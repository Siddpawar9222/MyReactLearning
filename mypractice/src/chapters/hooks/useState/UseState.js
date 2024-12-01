import { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(10);
  return (
    <>
      <div>{num}</div>
      <button type="button" onClick={() => setNum(num + 1)}>
        Increament
      </button>
    </>
  );
};

export default UseState;

/*
-It allows functional components to have state variables, enabling them to manage and update local component state .
-The useState hook returns an array with two elements:
  The current state value.
  A function to update the state.

Whenever state change component re-render  
*/
