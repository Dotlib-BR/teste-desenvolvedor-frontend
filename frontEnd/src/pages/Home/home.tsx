//React
import { useEffect } from "react";

//Styles
import { Container, Main } from "./home.styles";
import { AnimatePresence } from "framer-motion";
import { showUpAnimation } from "../../styles/animation";

//Components
import List from "../../components/List/list";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

//Service
import { getMedicineByPageOrId } from "../../service/service";

//Context
import { useGlobalContext } from "../../context/context";

function Home() {
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    getMedicineByPageOrId(setState, undefined, 1);
  }, []);

  return (
    <AnimatePresence>
      <Container {...showUpAnimation}>
        <Header />
        <Main>
          <List />
        </Main>
        {state.showFooter && <Footer />}
      </Container>
    </AnimatePresence>
  );
}

export default Home;
