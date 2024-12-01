import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProducts = () => async(dispatch,getState) =>{
    //console.log(getState())  // getState() for to get id or other paramete 
    try{
       const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`) ;
       // Here our data become sync
       dispatch(getProducts(response.data));
    }catch(error){
        console.log(error)
    }
}