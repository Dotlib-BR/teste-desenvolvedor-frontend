//Components
import Home from "./pages/Home/home";

//Context
import { GlobalStateProvider } from "./context/context";

//Styles
import { Container, GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles />
          <Home />
        </Container>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
