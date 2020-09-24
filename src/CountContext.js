import React from "react";

const PressMeContext = React.createContext();

const UsePressMeContext = () => React.useContext(PressMeContext);

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  return <PressMeContext.Provider value={[count, setCount]} {...props} />;
}

export { CountProvider, UsePressMeContext };
