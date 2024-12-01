import React from "react";

class Constructor extends React.Component{
    constructor(props){

        super(props) ;

        this.state ={
            count : 0
        }
        this.inc = this.inc.bind(this) ;    //We need to bind inc function 
    }
     
    inc(){
        this.setState((prevState)=> ({count: prevState.count + 1 }))
    }
    
    render(){
        return(
            <>
            <h1>Constructor</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.inc}>INcrement</button>
            </>
        )
    }
}

export default Constructor ;