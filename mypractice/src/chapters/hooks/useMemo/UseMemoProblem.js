import {useState ,useMemo} from 'react'
// The React useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.
//The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.


const UseMemoProblem = () => {
    const[count , setCount]=useState(0);
    const[name , setName]=useState("");

    const expenseCalculation=(num)=>{
        console.log("Calculating......");
        for(let i=0 ; i<1000000000; i++){}
        console.log("Done Caculation...");
        return num ;        
    } ;
    
const calculation =  expenseCalculation(count) ; //*
console.log("Num is " + calculation); 



  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Counter</button>
        <h1>{count}</h1>

         <input type="text" onChange={(e)=>{setName(e.target.value)}} />
         <h1>Name:{name}</h1>
    </div>
  )
}

export default UseMemoProblem  ;

/*
useState re-render the current entire component(re-runs the functions , not values(state)) whenever change is happing 

//* --> Because of this function our programme becomes slow as we are using  usestate . Every time  render page when change is done by user 

- Here I have counter button and Input box .Expense calculationis function which takes count Means it depends on counter button when I tried to do some operation by input box expense Calculation also run re-render again which affect the performance of current component
*/