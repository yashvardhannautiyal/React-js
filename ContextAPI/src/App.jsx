import CounterComp from "./components/CounterComp"
//used to access context in components
import { useContext } from "react"
import { CounterContext } from "./Context/CounterContextProvider"

function App() {
  //reads the value from CounterContext in contextProvider
  const counterState = useContext(CounterContext);
  console.log("context", counterState)
  return(
    <>
    <h1>Counter is {counterState.count}</h1>
    <CounterComp />
    <CounterComp />
    <CounterComp />
    <CounterComp />
    </>
  )
  
}

export default App
