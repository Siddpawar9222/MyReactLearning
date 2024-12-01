import Comp1 from "./components/Comp1";
import { useState, createContext } from "react";

const AppState = createContext();
const AppStateObj = createContext();

const App = () => {
  const [data, setData] = useState("This is me");
  const [obj, setobj] = useState({name:"Siddhesh" , age:22});

  return (
    <div>
      {/* <AppState.Provider value={data}>     //single data  */}  
      {/* <AppState.Provider value={{data , obj}}>    //combined Data */}

      <AppStateObj.Provider value={obj}>
        <div>App</div>
        <Comp1 />
      {/* </AppState.Provider> */}
      </AppStateObj.Provider>
    </div>
  );
};

export default App;
export {AppState ,AppStateObj} ;
