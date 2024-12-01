import { useState, useCallback } from "react";
import Todos from "./Todos";


const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todos"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todos"]);
  }, [todos]);

  return (
    <>
      <div>
        Count: {count}
        <br />
        <button onClick={increment}>Increment</button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
};

export default UseCallback;

/*
-The useCallback hook is used to optimize the performance of functional components. It is primarily useful when passing callbacks to child components, especially when those components are re-rendered frequently. By using useCallback, you can prevent unnecessary re-creation of callback functions, which can lead to improved performance and reduced re-renders.
-The React useCallback Hook returns a memoized callback function.

problem:
-Here we passed todos and addTodo as pros Todos.js
-We know that useState re-render the current entire component(re-runs the functions , not values(state)) whenever change is happing 
-so even we havent pass count this will render componenet as a result it re-render the Todos.js(as we passed props)
*/
