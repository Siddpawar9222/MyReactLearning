import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
           state.product = action.payload ;
    },
  },
});

export default ProductSlice.reducer;
export const {getProducts} = ProductSlice.actions;




/*
We cannot store asyncronous data into state(in redux) like this state.product = response.data ;
Got error : TypeError: Cannot perform 'set' on a proxy that has been revoked

Then how to store async data ? 
   We Have to use Higher order function.
   
     function a() {
     return function b() {
        
     }

    This is higher order function
    In fat arrow function 
    ()=>()=>
}

*/