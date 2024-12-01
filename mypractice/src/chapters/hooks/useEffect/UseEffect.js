// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

import { useState , useEffect } from "react" ;

const UseEffect = () => {
    const[state , setState]=useState(0);
    const[state1 , setState1]=useState(0);

    useEffect(()=>{
        console.log("UseEffect Called");        // Without dependency , useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect 
    },[])

    // useEffect(()=>{
    //     console.log("UseEffect Called");   
    // },[state])   // Now useEffect works for only "state" state.This function will execute last
   

    console.log("Function Body");
return (
     
    <div>
        {console.log("JSX Called")}
        <button onClick={ ()=>  setState(state+1)} > Click Me {state}</button>
        <button onClick={()=>  setState1(state1+1)} > Click Me too {state1}</button>
    </div>
  )
}

export default UseEffect ;




// 1. No dependency passed:

// useEffect(() => {
//   //Runs on every render
// }); 

//-----------------------

// 2. An empty array:

// useEffect(() => {
//   //Runs only on the first render
// }, []);

//------------------------

// 3. Props or state values:

// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state])