import { useContext } from "react";
import CounterContext from "../counterContext";

const Button = ({ type, label }) => {
  const [counter, dispatch] = useContext(CounterContext);

  console.log(counter);
  return <button onClick={() => dispatch({ type })}>{label}</button>;
};

export default Button;
