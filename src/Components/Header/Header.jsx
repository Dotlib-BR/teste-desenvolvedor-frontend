import "./Header.css"
import MainLogo from "../../Assets/MedicalLogo.png"

function Header({ MainHeaderText }) {
  return (
    <header>
      <h1>
        {MainHeaderText}
      </h1>
      <img src={MainLogo} alt="ìcone representando uma lupa e um bastão de esculápio, logo principal da marca" />
    </header>
  )
}

export default Header