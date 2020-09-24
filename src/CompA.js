import React from "react";
import { UsePressMeContext } from "./CountContext";
function CompA(props) {
  const [count, setCount] = UsePressMeContext();
  const incrementCounter = () => {
    setCount((c) => c + 1);
  };

  return <button onClick={incrementCounter}>Press Me</button>;
}

export default CompA;
