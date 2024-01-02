import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from '../store/counterSlice';
export default function Counter() {
  const {count}=useSelector(state=> state.counter)
  const dispatch=useDispatch();
  return (
    <div>
        <h2> Redux Toolkit Counter example</h2>
        <p> The counter is {count}</p>
        <button onClick={()=> dispatch(increment(2))}> ++ </button>
        <button onClick={()=> dispatch(decrement(1))}> -- </button>
        <button onClick={()=> dispatch(reset())}> Reset </button>
    </div>
  )
}
