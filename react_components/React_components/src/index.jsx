//----------Component------
//In React, a component is a reusable and self-contained building block that contains a piece of the user interface and its related functionality.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//NOTES
// a component name should be in PascalCase meaning every first letter of a word should be in capital ex: Heading, TextBold, etc. it is done to differetiate btwn html tags and components
//calling a component is <Heading></Heading> or <Heading />
//index.jsx will have only App.jsx imported component and App.jsx will have all the components imported in it

//Types of components : i) Functional component  ii) Class component
//-----------------------Functional Components---------------- 
// are just like JavaScript functions that accept properties and return a React element.
//---------------------------Class component -----------------
// can show inheritance and access data of other components. Class Component must include the line “extends React.Component” to pass data from one class component to another class component.
