// Some effects require cleanup to reduce memory leaks.

// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

// We do this by including a return function at the end of the useEffect Hook.

import {React ,useState , useEffect} from 'react'

const UseEffect_Cleanup = () => {
            
  const[counter, incCounter] = useState(0) ;

  useEffect(()=>{
  const timer =  setTimeout(() => {
       incCounter(counter+1) ;
    }, 1000);
    console.log(timer)
    return () => clearTimeout(timer); // cleanup to avoid memory leaks

  },[counter])
  return (
    <>
      <h2>This is counter : {counter}</h2>
    </>
  )
}

export default UseEffect_Cleanup