import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/home";
import Medicine from "../../pages/medicine";
import MedicineDetails from "../../pages/medicine/details";
import Error from "./error";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/medicine/:id" element={<MedicineDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}