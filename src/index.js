import React from "react";
import ReactDOM from "react-dom";

import Counter from "./counter";

const App = () => (
  <div>
    <h1>React app</h1>
    <Counter />
  </div>
);

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
