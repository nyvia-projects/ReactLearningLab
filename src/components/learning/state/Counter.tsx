import { useReducer, useState } from "react";

type CounterState = {
  count: number;
};

const initialState: CounterState = { count: 0 };

export const Counter1 = () => {
  const [count, setCount] = useState<CounterState>(initialState);
  return (
    <>
      Count: {count.count}
      <button onClick={() => setCount({ count: count.count + 1 })}>+</button>
    </>
  );
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        0
      </button>
    </>
  );
};
