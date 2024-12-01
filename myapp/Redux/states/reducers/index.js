import {createSlice} from "@reduxjs/toolkit" ; 

export const incdecSplice = createSlice({
    name:"incdec" ,
    initialState :10 ,
    reducers :{
       Inc : (state , action)=>{
           return state +=action.payload ;
       }
       ,
       Dec : (state , action)=>{
           return state -=1 ;
       }
    }
})
export const{Inc , Dec} =incdecSplice.actions ;
export default incdecSplice.reducer ;