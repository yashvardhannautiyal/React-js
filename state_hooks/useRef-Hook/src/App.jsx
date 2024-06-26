import { useEffect, useState, useRef } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let a =0;

  // useEffect(()=>{
  //   a = a+1; // when we re-render the state the value of a again becomes 0 and value of a remains 1 on again re-rendering; so to overcome this problem useRef hook was introduced
  //    console.log(`Rendering and value of a is ${a}....`);
  // })

  const a = useRef(0);

  useEffect(()=>{
    a.current = a.current+1;
    console.log(`Rendering and value of a is ${a.current}...`);
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


//Notes 
// whenever value of count(state) changes the component re-renders on screen using useEffect 
//but when value of useRef is changed the component is not re-rendered on screen!!

//Usecase 1: used to change value accross platform inside useEffect 
//UseCase 2 : used to reduce ussage of DOM manupilation in React
