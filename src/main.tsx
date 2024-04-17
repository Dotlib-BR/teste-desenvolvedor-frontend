import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./ui/components/App";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
