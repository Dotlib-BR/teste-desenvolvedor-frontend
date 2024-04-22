import { useNavigate } from "react-router"
import { Footer } from "../../components/Footer"
import { MainContainer } from "./Styles"

export const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <MainContainer>
      <div>
        <h1>Error 404</h1>
        <p>Parece que esta pagina não existe...</p>
        <button onClick={() => navigate("/")}>voltar ao início</button>
      </div>
    <Footer />  
    </MainContainer>
  )
}