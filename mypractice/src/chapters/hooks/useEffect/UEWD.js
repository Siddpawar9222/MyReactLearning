//UEWD - UseEfffect Without Dependency

import React, { useState ,useEffect } from 'react'

const UEWD = () => {
  const[counter, incCounter] = useState(0) ;

  useEffect(()=>{
    setTimeout(() => {
       incCounter(counter+1) ;
    }, 1000);
  },[])
  return (
    <>
      <h2>This is counter : {counter}</h2>
    </>
  )
}

export default UEWD

//UseEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect