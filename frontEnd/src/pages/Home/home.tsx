//React
import { useEffect } from "react";

//Styles
import { Container, Title, Header, Main, Footer } from "./home.styles"

//Components
import Search from "../../components/Search/search";
import Ordenation from "../../components/Ordenation/ordenation";
import List from "../../components/List/list";

//Service
import { getMedicineData } from "../../service";

//Context
import { useGlobalContext } from "../../context/context";

function Home() {
    const { state, setState } = useGlobalContext();

    const fetchData = async () => {
        try {
          const data = await getMedicineData();
          setState({
            ...state,
            listData: data?.data
          })
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

    useEffect(() =>  {      
        fetchData();
        console.log(state)
    }, [])

  return (
    <Container>
        <Title>Bulário</Title>
        <Header>
            <Search />
            <Ordenation />
        </Header>
        <Main>
            <List />
        </Main>
        <Footer>
            Aqui vai os botões da paginação
        </Footer>
    </Container>
  )
}

export default Home