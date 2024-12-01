import React from "react" ;
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Constructor from "./Constructor";
class App extends React.Component {
  state ={
    show:true ,
  }

  
render(){
  //logic

  let child;
  if(this.state.show){
    child=<Comp2/>
  }

 return (
    <>
    <h1>Class Components</h1>
    <Comp1 name={"Sidddhesh"}/>  {/* Passing props*/}
     <br />
    {child}
    <button onClick={()=>this.setState({show:false})}>Remove Component 2</button>

    <Constructor/>
    </>
);
 }
};

export default App;
