import React, { useEffect, useState } from "react";
import MyComponent from "./MyComponent";

function App(){

  const [isVisible, setVisible] = useState(true);

  useEffect(()=>{
    console.log("App component is mounting....");
  }, []);

  return <div className="App">
    {isVisible ?< MyComponent /> : <></> } {/*shows MyComponent only when isVisible is true else it shows nothing on screen and unmounts the myComponent*/}
    <button onClick={() => setVisible(!isVisible)}>Toggle</button>
  </div>
}

export default App;


//unmounting using useEffect
//