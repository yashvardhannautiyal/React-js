//JSX attributes and styling react elements
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Food
    </h1>
    <div>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.9Gcof8tZSHlQYs87PZM-BQHaGr&pid=Api&P=0&h=180"
        alt=""
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.ug7mcOMWDCGNYWMVONgcgwHaE8&pid=Api&P=0&h=180"
        alt=""
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.Q-xfQmnrPLOiVhsfCMXVxwHaHa&pid=Api&P=0&h=180"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);

//Notes
//className is used here instead of class to call a class styling
// also attributes in jsx file are in Camel case styling
//there should be closing tag always for all elements; in self closing tags linke img format is <img/>

