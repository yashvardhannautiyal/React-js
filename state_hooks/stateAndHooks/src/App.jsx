import React, { useState } from 'react' //importing useState hook

function App(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={()=> setCount(count+1)}>Click to increment 1</button>
    </div>
  )
}

export default App



//--------------NOTES-----------------
//HOOKS : are reusable functons that provide access to state in React app
//State : state of a component is a variable that holds some information that may change over the lifetime of a component 

//useState hook : takes two input  - [value, function] 
// value: returned by the function and function : that returns the updated value