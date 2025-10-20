import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://home.openweathermap.org/">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/santosh-sharma-b7726a241/">
          Santosh sharma
        </a>{" "}
        | Powered by real time data{" "}
        <a target="_blank" href="https://home.openweathermap.org/">
        openweathermap.org
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
