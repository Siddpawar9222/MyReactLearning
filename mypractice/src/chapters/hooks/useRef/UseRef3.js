

import {useRef } from 'react' ;

const UseRef3 = () => {
  
    const inputField = useRef() ;

    const changeInputField =()=>{
    //  inputField.current.value="Siddhesh";
    //  inputField.current.focus();
    inputField.current.style.border = "0.2rem solid red" ;        //In JavaScript we have to access each element like document.getElementById("") . So it is become very convient in react;
    }

  return (
  

    <div>
        <input  ref={inputField} ></input>
        <button onClick={()=>changeInputField()}>Click Here to Input field border</button>
    </div>
  )
}

export default UseRef3

/*
-It can be used to access a DOM element directly.

Note :
-()=>changeInputField is an arrow function that creates a new function that will execute changeInputField when it is called. This is typically used in event handlers or as a callback function.
-changeInputField is the reference to the function itself, which can be passed around as a value or executed directly.
-In the example you provided, the onClick prop should be onClick={()=>changeInputField()} instead of onClick={()=>changeInputField}. This is because you want to execute the changeInputField function when the button is clicked, rather than just passing the function reference.

*/




