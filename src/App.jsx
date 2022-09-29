import React from "react";
import logo from "./logo.svg";
import "./App.css";

import User from "./components/UserComponent";

function App() {
  return (
    <div className="App">
      <div>
        <h1>List of Products</h1>
      </div>
      <User />
    </div>
  );
}

export default App;
