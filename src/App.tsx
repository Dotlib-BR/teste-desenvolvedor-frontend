import { Routes, Route } from "react-router-dom"

// Pages
import HomePage from "./pages/home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/medicines/[id]" element={<HomePage />} />
    </Routes>
  )
}

export default App
