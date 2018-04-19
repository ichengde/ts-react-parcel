import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import * as assests from "./bundle/bundle.js";
import App from "./components/App";


console.log(assests);
ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById("root")
);
