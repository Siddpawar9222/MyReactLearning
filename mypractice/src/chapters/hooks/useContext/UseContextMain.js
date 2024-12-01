import Comp1 from "./Comp1";
import { useState, createContext } from "react";

const AppState = createContext();

const UseContextMain = () => {
  const userData = {
    name: "John Doe",
    age: 30,
    place: "USA",
    isAdmin: false,
  };

  const [data, setData] = useState(userData);

  return (
    <div>
      <AppState.Provider value={data}>
        <div>This is Parent Component</div>
        <Comp1 />
      </AppState.Provider>
    </div>
  );
};

export default UseContextMain;
export { AppState };


/*
-Context is a mechanism in React that allows you to share data between components without having to pass it through props at every level of the component tree. It helps to avoid "prop drilling," which occurs when you need to pass data down through multiple levels of components, even if some intermediate components don't need the data.

- createContext-------->Provider-------->useContext

*/
