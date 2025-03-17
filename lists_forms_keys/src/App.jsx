import React, { useState } from "react";
import ReactDOM from "react-dom";


function App() {
  //list
const [todo, setTodo] = useState([
  {
    id: 1,
    title: "hey",
    desc: "this is todo1",
  },
  {
    id: 2,
    title: "hey",
    desc: "this is todo1",
  },
  {
    id: 3,
    title: "hey",
    desc: "this is todo1",
  },
  {
    id: 4,
    title: "hey",
    desc: "this is todo1",
  },
  {
    id: 5,
    title: "hey",
    desc: "this is todo1",
  }
]);

  return (
    <div>
      <h1>Lists in React</h1>
        {/* rendering list */}
        {todo.map(item =>{
          return (
          <>
          <div>{item.title}</div>
          <div>{item.desc}</div>
          </>
          )
        })}
    </div>
  );
}

export default App;
