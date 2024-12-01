import { memo } from "react";
//Here we are using memo because todos is props . when props changes , the changes is also reflect on this page . increment function--->setCount function change ----->useCallback render ---> todos props render 

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
