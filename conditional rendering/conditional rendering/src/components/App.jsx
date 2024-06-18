import React from "react";
import Login from "./Login";

var isLoggedIn = false;
//------------ 1 method ---------------
// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

// ----------------method 2-------------
// making it more shorter
// in jsx {} inside curly braces there can only be expressions and if-else, loops are all statements and cannot come inside it therefore, we will use ternary operator to perform this action in this method

// Ternary operator :
// condition ? trueResult : falseResult;
// function App() {
//   return (
//     <div className="container">
//       {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
//     </div>
//   );
// }


// ----------------Ternary operator and AND operator -------------------
const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);


function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      // && operator in js =
// expression && expression

// && operator in react
// condition && expression  | (runs only if the condition is true, if it is false it will not run the expression)

      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
