import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

//-------------------1 METHOD-----------------
// import { add, subtract, multiply, divide } from "./calculator";
// ReactDOM.render(
//   <ul>
//     <li>{add(1, 2)}</li>
//     <li>{multiply(2, 3)}</li>
//     <li>{subtract(7, 2)}</li>
//     <li>{divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );

// ----------------------------2 METHOD---------------------------
import * as Maths from "./calculator";
ReactDOM.render(
  <ul>
    <li>{Maths.add(1, 2)}</li>
    <li>{Maths.multiply(2, 3)}</li>
    <li>{Maths.subtract(7, 2)}</li>
    <li>{Maths.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

