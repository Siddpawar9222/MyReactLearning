import React ,{useContext} from 'react'

import { AppState } from './UseContextMain';

const Comp3 = () => {

    const data = useContext(AppState);

  return (
    <>
    <div>comp3</div>
    <div> {data.name}</div>   
    <div> {data.age}</div>   
    <div> {data.place}</div>   
    </>

  )
}

export default Comp3 ;