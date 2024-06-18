import React from "react";
import ReactDOM from "react-dom";

// ---------1 method of importing js -----------
// used when we want to import specific thing from the module

// import PI, { doublepi, triplepi } from "./math";
// ReactDOM.render(
//   <ul>
//     <li>{PI}</li>
//     <li>{doublepi()}</li>
//     <li>{triplepi()}</li>
//   </ul>,
//   document.getElementById("root")
// );

// --------------2 method -------------
// used when we want to export everything from the module

import * as pi from "./math"; // import everyting as name pi
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublepi()}</li>
    <li>{pi.triplepi()}</li>
  </ul>,
  document.getElementById("root")
);

