import React, { useEffect } from "react";
import MyComponent from "./MyComponent";

function App(){

  useEffect(()=>{
    console.log("App component is mounting....");
  }, []);

  return <div className="App">
    <MyComponent />
  </div>
}

export default App;