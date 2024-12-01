import React from 'react'

const NeedOfHooks = () => {
  let num = 10 ; 
  const IncrementFunc =()=>{
      num +=1 ;
  }
  return (
    <> 
       <div>{num}</div>
       <button type="button" onClick={()=>IncrementFunc()}>Increament</button>
    </>
  )
}

export default NeedOfHooks

/*
  Hey I am trying to increment a number but with the help of typical JavaScript method I am not able to do that because react js work on state and there should be some mechanism to handle a state . with the help of hooks we can do it .
*/