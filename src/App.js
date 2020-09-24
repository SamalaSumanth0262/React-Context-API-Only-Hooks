import React from "react";
import "./styles.css";
import CompA from "./CompA";
import CompB from "./CompB";
import { CountProvider } from "./CountContext";
export default function App() {
  return (
    <div className="App">
      <CountProvider>
        <CompA />
        <CompB />
      </CountProvider>
    </div>
  );
}
