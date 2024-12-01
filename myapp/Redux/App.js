import "./App.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Inc , Dec } from "./states/reducers"

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const App = () => {
    const curState = useSelector((state)=> state.number)
    const dispatch = useDispatch() ;

  return (
    <div>
      <h1 className="text-center">React Redux<Badge bg="secondary m-1">New Concept</Badge> </h1>
       <div className="container">
       <h1>{curState}</h1>
       <div>
        
       <Button variant="outline-success m-1" onClick={()=>dispatch(Inc(10))}>INC</Button>
       <Button variant="outline-danger m-1"  onClick={()=>dispatch(Dec())}>DEC</Button>
       </div>
       </div>
    </div>
  )
}

export default App   