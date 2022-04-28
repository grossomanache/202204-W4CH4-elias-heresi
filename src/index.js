import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PhoneContextProvider from "./contexts/PhoneContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
