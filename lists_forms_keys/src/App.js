import React from "react";
import ReactDOM from "react-dom";

// --------------LISTS--------------------
const arr = [11,22,33,44,55,66];//Creating list
function App() {
  return ( //rendering list
    <div>
      <h1>Lists in React</h1>
   <ul>
    {arr.map((item)=>(
      <li>{item}</li> //traversing list
    ))}
   </ul>
   </div>
    
  );
}

export default App;
