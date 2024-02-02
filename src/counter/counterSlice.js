import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  name:'tirth',
  email:'tirth@gmail.com'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    demo:(state)=>{
        state.value +=5
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, demo} = counterSlice.actions

export default counterSlice.reducer