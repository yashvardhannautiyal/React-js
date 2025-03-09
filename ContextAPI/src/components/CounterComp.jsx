import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContextProvider'

function CounterComp() {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
      onClick={
        () => counterContext.setCount( counterContext.count + 1)
      }
      >Increment</button>
      <button
      onClick={
        () => counterContext.setCount( counterContext.count - 1)
      }>Decrement</button>
    </div>
  )
}

export default CounterComp
