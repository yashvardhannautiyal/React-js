import React, { useEffect } from "react";

function App(){

  useEffect(()=>{
    console.log("App component is mounting....");
  }, []);

  return <div className="App"></div>
}

export default App;