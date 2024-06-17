import React from "react";
import ReactDOM from "react-dom";

const fName = "yash";
const lName = "vardhan";
const num = 9;
ReactDOM.render(
  <div>
    {/* <h1>Hello {fName + " " + lName}!</h1> */}
    {/* <h1>Hello {fName} {lName}!</h1> */}
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>
      My lucky number is {num} and {Math.floor(Math.random() * 10)}
      {/* {if(num>10){
        return true;   //not acceptable
      }} */}
    </p>
  </div>,
  document.getElementById("root")
);

// Notes
// to access any variable while rendering which is outside the main div container we use {} curly braces to call it also we can use js expressions inside { curly braces}
// but we cannot write vanilla js inside {curly braces}


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
