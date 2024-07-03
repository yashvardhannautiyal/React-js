import React from "react";
import Navbar from "./Components/Navbar";

function App() {
  const getAdjective = () =>{
    return "GOOD NIGHT"
  }

  return (
    <div>
      <Navbar adjective={"good morning"} getAdjective = {getAdjective} />
    </div>
  );
}

export default App;
