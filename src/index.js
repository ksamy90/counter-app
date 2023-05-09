import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
