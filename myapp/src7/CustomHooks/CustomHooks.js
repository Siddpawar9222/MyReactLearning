import {useState, useEffect} from 'react'
import UseFetch from './UseFetch' ;
// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.


export const CustomHooks = () => {
//    const[data , setData] =useState([]) ;
  
//    useEffect(()=>{
//     async function getData() {
//         const get = await fetch(`https://fakestoreapi.com/products/4`);
//         const promises = await get.json();
//         console.log(promises);
//         setData([promises])
//     }
//     getData()
//    },[]) 

const [data] = UseFetch(`https://fakestoreapi.com/products/4`) ;
           
  return (
    <div>
        {
            data.map((Element , index)=>{
                return(
                    <h1 key={index}>{Element.category}</h1>
                )
            })
        }

      
       
    </div>
  )
}

export default CustomHooks ;