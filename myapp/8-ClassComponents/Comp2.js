import React from "react";

class Comp2 extends React.Component{
    componentWillUnmount(){
        alert("Component is going to be delete")
    }
    render(){
        return(
            <div>Component 2 Is Here</div>
        )
    }
}

export default Comp2 ; 