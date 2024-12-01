import { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log("State :", state);
    console.log("Action :", action);

    if (action.type === "INC") {
      return state + 2;
    } else if (action.type === "DEC") {
      return state - 2;
    } else {
      return state * 2;
    }
  };
  //  const [state , dispatch] =useReducer(reducer , initailState) ;
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    </div>
  );
};

export default UseReducer;

/*
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
*/
