import { createSlice } from "@reduxjs/toolkit";
const initialValue={count:0};
export const counterSlice=createSlice({
    name:'counter',
    initialState:initialValue,
    reducers:{
        increment:(state,action)=>{
            state.count+=action.payload
        },
        decrement:(state,action)=>{
            state.count-=action.payload
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
//actions are generated as per the reducers 
export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;