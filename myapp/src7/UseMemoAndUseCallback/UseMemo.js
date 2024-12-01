import {useState ,useMemo} from 'react'
// The React useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.
//The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.


const UseMemo = () => {
    const[count , setCount]=useState(0);
    const[name , setName]=useState("");

    const expenseCalculation=(num)=>{
        console.log("Calculating......");
        for(let i=0 ; i<1000000000; i++){}
        console.log("Done Caculation...");
        return num ;        
    } ;
//   const calculation =  expenseCalculation(count) ; //Because of this function our programme becomes slow as we are using  usestate . Every time  render page when change is done by user 
const calculation = useMemo(()=>{
    expenseCalculation(count)
} ,[count])  ;          //useMemo work for only count

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Counter</button>
        <h1>{count}</h1>

         <input type="text" onChange={(e)=>{setName(e.target.value)}} />
         <h1>Name:{name}</h1>
    </div>
  )
}

export default UseMemo