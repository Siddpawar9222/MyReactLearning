import React ,{useContext} from 'react'
import { AppState , AppStateObj } from '../App';

const Comp3 = () => {
    const AppstateC = useContext(AppState) ;
    const AppstateCObj = useContext(AppStateObj) ;

  return (
    <div>
    <div>comp3</div>
    {/* <div> &nbsp; {AppstateC}</div>      //single value */}
    {/* <div>&nbsp; Data : {AppstateC.data}</div>
    <div>&nbsp; Name : {AppstateC.obj.name}</div>
    <div>&nbsp; Age : {AppstateC.obj.age}</div>      //combined Data */}
    
    <div>&nbsp; Name : {AppstateCObj.name}</div>
    <div>&nbsp; Age : {AppstateCObj.age}</div>      
    </div>

  )
}

export default Comp3 ;