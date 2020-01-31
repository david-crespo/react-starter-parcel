import React from "react";
import ReactDOM from "react-dom";

import { Counter, CounterClass } from "./counter";

const App = () => (
  <div>
    <h1>React app</h1>
    <h3>Counter as function component with hooks</h3>
    <Counter />
    <h3>Counter class component</h3>
    <CounterClass />
  </div>
);

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
