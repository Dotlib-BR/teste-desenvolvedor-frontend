import Header from './components/header';
import Introduction from './components/intro';
import './global.scss';
import { MainRouter } from './routes/MainRoutes';

function App() {

  return (
    <>
      <Header />
      <MainRouter />
      <Introduction />
    </>
  )
}

export default App;
