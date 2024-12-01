import { useState, useEffect, useRef } from "react";
// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

const UseRef = () => {
  const [input, setInput] = useState("");
  // const [counter , setCounter]  =useState(0);
  //  const counter = useRef(0);
  const preState = useRef("");
  const inputField = useRef();


  const change = (e) => {
  setInput(e.target.value);
  };

  const changeInput =()=>{
    //  inputField.current.value="Siddhesh";
    //  inputField.current.focus();
    inputField.current.style.border = "2px solid red" ;        //In JavaScript we have to access each element like document.getElementById("") . So it is become very convient in react;
  }
  useEffect(() => {
    //  setCounter(counter+1);   It make infinite
    // counter.current = counter.current + 1 ;
    preState.current = input;
  });


  return (
    <div>
      <input
        type="text"
        ref={inputField}
        value={input}
        onChange={(e) => {
          change(e);
        }}
      />
      {/* <h4>Application Has Been Renbered {counter.current} Times</h4> */}
      <h4>Previous State was {preState.current}</h4>
      <button onClick={changeInput}>Click here to Show Change</button>
    </div>
  );
};

export default UseRef;
