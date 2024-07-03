import React from "react";
import Navbar from "./Components/Navbar";
import { useCallback } from "react";

function App() {
  const getAdjective = useCallback(() => {
    return "GOOD NIGHT";
  }, []);

  return (
    <div>
      <Navbar adjective={"good morning"} getAdjective={getAdjective} />
    </div>
  );
}

export default App;


//useCallback
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// This can improve performance.