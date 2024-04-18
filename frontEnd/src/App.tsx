//Components
import Home from "./pages/Home/home";

//Context
import { GlobalStateProvider } from "./context/context";

//Styles
import { Container, GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <GlobalStateProvider>
      <Container>
        <GlobalStyles />
        <Home />
      </Container>
    </GlobalStateProvider>
  );
}

export default App;
