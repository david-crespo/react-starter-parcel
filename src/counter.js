import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0px 15px" }}>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        <span style={{ margin: "0px 15px" }}>Count: {count}</span>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
      </div>
    );
  }
}
