import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./ui/components/App";
import "./global.scss";
import { SearchContextProvider } from "./context/search-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SearchContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchContextProvider>
);
