//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customH = {
  color: "black",
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black",
};
const date = new Date();
const time = date.getHours();

let greating;

if (time < 12) {
  greeting = "Good morning";
  customH.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customH.color = "green";
} else {
  greeting = "Good Night";
  customH.color = "blue";
}

ReactDOM.render(
  <h1 style={customH}>{greeting}</h1>,
  document.getElementById("root")
);
