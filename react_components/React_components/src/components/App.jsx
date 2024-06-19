import React from "react";
import Heading from "./Heading";
import List from "./List";

//Class component
class Welcome extends React.Component{
        render(){ 
          return <h1>This is class component</h1>;
        }
      };
function App() {
  return (
    <div>
      <Heading />
      <Welcome />
      <List />
      <List />
    </div>
  );
}

export default App;
