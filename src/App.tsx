import { Routes, Route } from "react-router-dom"

// Pages
import HomePage from "./pages/home"
import MedicinePage from "./pages/medicine"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/medicines/:id" element={<MedicinePage />} />
    </Routes>
  )
}

export default App
