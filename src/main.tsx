import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MedicineDataContextProvider } from "./context/MedicineDataContext.tsx";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Details from "./pages/Details.tsx";
import Header from "./components/Header.tsx";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MedicineDataContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/medicine/details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </MedicineDataContextProvider>
);

function Layout () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
