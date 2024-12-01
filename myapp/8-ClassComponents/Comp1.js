import React from "react";



class Comp1 extends React.Component {
  state = {
    name: "Siddhesh",
    count: -1,
    
    name1 :"",
    prevName1 :"" ,
    
  };

  inc = () => {
    // this.setState({count : this.state.count + 1})    // directly modifies current state value of count
    this.setState((prevState) => ({ count: prevState.count + 1 })); //uses the prevState argument passed to the function inside setState to get the previous value of count.
  };

  componentDidMount() {
    console.log("Component Created");
    // this.setState({count : 10})
    this.setState((prevState) => ({ count: prevState.count + 1 }));     //Works properly
  } //componentDidMount() method is the perfect place, where we can call the setState() method to change the state of our application and render() the updated data loaded JSX .

  componentDidUpdate(prevProps , prevState) {
    console.log("Did Update Called");
    if (this.state.count < 50) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));    //Only this sentence cause to infinite loop
    } 

    if (prevState.name1 !== this.state.name1) {
        this.setState({ prevName1: prevState.name1 });
      }
  } // componentDidUpdate() method is updating the DOM in response to prop or state changes ,  used to update the component's state after the component has been updated.
  
  
  render() {
    return (
      <>
        <h1>Comp1 + {this.props.name}</h1> {/* Accessing props*/}
        <h2>{this.state.name}</h2>
        <button onClick={this.inc}>Increment</button>
        <h2>{this.state.count}</h2>
        
        <h1>Name :{this.state.name1}</h1>
        <h1>Prevoius Name :{this.state.prevName1}</h1>
        <input type="text" value={this.state.name1} onChange={(e)=>this.setState({name1 : e.target.value})} />
      </>
    );
  }
}

export default Comp1;


// You cannot have multiple lifecycle methods with the same name in a single component (You can't write 2 state in one program)
//https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component