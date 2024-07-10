import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./Context/Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <App />    
    </CounterProvider>
  </React.StrictMode>
);

  {/*By putting <App /> inside counterProvider it ensures that all the components in App component can be accissible by counterProvider as to access context */}
