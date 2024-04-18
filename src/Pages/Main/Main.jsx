import './Main.css'
import Header from '../../Components/Header/Header'
import MedicalSearchForm from '../../Components/MedicalSearchForm/MedicalSearchForm'

function Main() {
  return (
    <>
      <Header
        MainHeaderText={"Bulário Eletrônico"}
      />
      <main>
        <MedicalSearchForm/>
      </main>
    </>
  )
}

export default Main