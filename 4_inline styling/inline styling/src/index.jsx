// inline styling for react elements
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px", //properties should be in camel case
  border: "1px solid black", // values should be string
};
customStyle.color = "blue";
ReactDOM.render(
  // ------------1 method--------------
  // {/* <h1 style={{ color: "red" }}>Hello world</h1>,document.getElementById("root") */}

  //   -------------2 method-------------------
  <h1 style={customStyle}>Hello world</h1>,
  document.getElementById("root")
);

// Notes
//to include inline css we include it by making it js object
// {key : value,
// key 2 : value2,
// color : "red"
// }
//to include html in jsx we keep it inside {curly braces}
//therefore inline css will be inside {{2 curly braces}} inside is object and outside curly brace is for inluding html in jsx file

