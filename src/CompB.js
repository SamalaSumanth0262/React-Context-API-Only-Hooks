import React from "react";
import { UsePressMeContext } from "./CountContext";
function CompB(props) {
  const [count] = UsePressMeContext();
  return <div>The value is ==== {count}</div>;
}

export default CompB;
