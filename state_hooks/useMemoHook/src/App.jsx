import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_00_000).fill(0).map((_, i)=>{ //Array(30_00_000).fill : it will create  30,00,00 entries in array
  return {
    index : i,
    isMagical : i=== 29_00_000

  }
})
function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item => {item.isMagical === true}) //this will check all 29,00,000 entries if the number is magical or  not and this is EXPENSIVE COMPUTATION everytime componenet is re-rendered on screen 
  // to overcome this problem useMemo() was introduced

 const magical =  useMemo(() => numbers.find(item => {item.isMagical === true}), [numbers]) 
 //this MEMOIZES : means it will save the value once found and will not perform computation each time the component is rendered on screen

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={
          () => {setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_00_000).fill(0).map((_,i)=>{
              return {
                index : i,
                isMagical : i===9_00_000
              }
            }))
          }}}>
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
