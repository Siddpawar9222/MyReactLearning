
import {useState} from "react" ;
import UseRef from "./UseRef"
import UseReducer from "./UseReducer"
import CustomHooks from "./CustomHooks/CustomHooks"
import UseMemo from "./UseMemoAndUseCallback/UseMemo"
import UseCallback from "./UseMemoAndUseCallback/UseCallback"
import Preloader from "./CustomHooks/Preloder";


const App = () => {
  
  return (
    <div>
        {/* <UseRef/> */}
       {/* <UseReducer/> */}
       {/* <CustomHooks/> */}
       {/* <UseMemo/> */}
       {/* <UseCallback/> */}
      
     <Preloader/>
    </div>
  )
}

export default App   