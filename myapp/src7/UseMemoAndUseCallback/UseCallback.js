import { useState, useCallback } from "react";
import Todos from "./Todos";
//The React useCallback Hook returns a memoized callback function.

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todos"]);
  //   };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todos"]);
  }, [todos]);

  return (
    <>
      <div>
        Count: {count}
        <br />
        <button onClick={increment}>Increment</button>
        {/* When I click on increment my increment function gets called because of this increment function my use callback function again rendered Has my callback function again rendered adTodos function automatically called Hence props gets changed and my Todos component callled automatically */}
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
};

export default UseCallback;
