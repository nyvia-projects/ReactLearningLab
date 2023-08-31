import { Component, ReactNode } from "react";
import { CounterProps, CounterState } from "./Counter.types";

export class Counter3 extends Component<CounterProps, CounterState> {
  // {} for no-prop or remove state for no-state
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}
