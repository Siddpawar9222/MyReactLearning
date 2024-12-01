import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    comments: [
        {
        id: 1,
        text: 'first comment',
        postId: 1
    },
    { 
        id: 2,
        text: 'second comment',
        postId: 2
    }
    ],  // This array will store all items in the cart
  };


  const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: { 

        // Action to get all comments
        getComments: (state, action) => {
            state.comments = action.payload;
        },

         // Action to add comments

         addComment : (state, action) => {
            console.log(action)
             state.comments.push(action.payload);
         }
    }
  }); 


  console.log(commentSlice);

  export default commentSlice.reducer;
  export const {getComments, addComment} = commentSlice.actions;

  

// default export value can be changed directly at import time