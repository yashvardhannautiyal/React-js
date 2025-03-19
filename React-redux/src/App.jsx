import { useState } from "react";
import Navbar from "./components/Navbar";
import {useSelector, useDispatch} from "react-redux"
import { decrement, increment, incrementByAmount } from "./Redux/counter/counterSlice";

const App = () =>{
  //to read the value of count from redux store
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return(
    <>
    <Navbar />
    <div>This is react App
      <br />
    <button
    onClick={() => dispatch(incrementByAmount(6))}
    >+</button>
    I am the app and currently count is {count}
    <button
    onClick={() => dispatch(decrement())}>-</button>
    </div>
    </>
  )
}
export default App;