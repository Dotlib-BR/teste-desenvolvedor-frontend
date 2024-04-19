//React
import { useEffect } from "react";

//Styles
import { Container, Title, Header, Main } from "./home.styles";

//Components
import Search from "../../components/Search/search";
import Ordenation from "../../components/Ordenation/ordenation";
import List from "../../components/List/list";
import Footer from "../../components/Footer/footer";

//Service
import { getMedicineByPageOrId } from "../../service/service";

//Context
import { useGlobalContext } from "../../context/context";

function Home() {
  const { setState } = useGlobalContext();

  useEffect(() => {
    getMedicineByPageOrId(setState, undefined, 1);
  }, []);

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
      <Footer />
    </Container>
  );
}

export default Home;
