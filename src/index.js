import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import MyApp from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
