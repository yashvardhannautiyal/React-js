import { useContext } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import { CounterContext } from "./Context/Counter";

function App() {
  const counterState = useContext(CounterContext);
  console.log("Context", counterState);

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;


//using Context 
//STEP 1 : import useContext
//STEP 2 : make a contextProvider to include APP.jsx file for accessing context in all the components
