import { useReducer } from "react";
import CounterContext from "./counterContext";
import Button from "./components/Button";
import Display from "./components/Display";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <Display counter={counter} />
      <div>
        {/* <Button dispatch={counterDispatch} type="INC" label="+" />
        <Button dispatch={counterDispatch} type="DEC" label="-" />
        <Button dispatch={counterDispatch} type="ZERO" label="0" /> */}
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </CounterContext.Provider>
  );
};

export default App;
