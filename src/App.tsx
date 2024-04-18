import './App.css'
import { MedicinesComponent } from './components/MedicinesComponent'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

function App() {
  return (
    <main>
      <Header />
      <MedicinesComponent />
      <Footer />
    </main>
  )
}

export default App
