import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice(
{
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment : (state) => {
        state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

//Enable async operation(like api)
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 2000);
  };
  

export default CounterSlice.reducer 