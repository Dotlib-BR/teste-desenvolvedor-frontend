import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MedicineDataContextProvider } from "./context/MedicineDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MedicineDataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MedicineDataContextProvider>
);
