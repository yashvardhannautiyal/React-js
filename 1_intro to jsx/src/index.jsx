// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom"; //this is efficient way of imorting modules in react

// ReactDom.render(what to show, where to show )
// ReactDOM.render(<h1>hello world</h1>, document.getElementById("root")); // this render html(h1) in (root) position

// -----------Vannilla JS--------------
// var h1 = document.createElement;
// ("h1");
// h1.innerHTML = "HEWllo world";
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <p>hweyy again</p>
  </div>,
  document.getElementById("root")
);

// --------NOTES-----------
//rendering is done with the help of jsx where js is javascript and x is html withthe help of BABEL (converts current generation js to next generation)
//we can render one element at a time and to overcome this loop hole we use a single div inside which all the html is written

