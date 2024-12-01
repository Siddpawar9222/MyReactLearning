import { useState , useEffect } from "react" ;

const UseEffect = () => {
    const[state , setState]=useState(0);
    const[state1 , setState1]=useState(0);

    // useEffect(()=>{
    //     console.log("UseEffect Called");        // Without dependency , useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect 
    // })

    useEffect(()=>{
        console.log("UseEffect Called");   
    },[state])                         // Now useEffect works for only "state" state
   

    console.log("Function Body");
return (
     
    <div>
        {console.log("JSX Called")}
        <button onClick={ ()=>  setState(state+1)} > Click Me {state}</button>
        <button onClick={()=>  setState1(state1+1)} > Click Me too {state1}</button>
    </div>
  )
}

export default UseEffect