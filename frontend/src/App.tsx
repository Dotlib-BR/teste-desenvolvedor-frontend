import Header from './components/header';
import Introduction from './components/introduction';
import './global.scss';
import { MainRouter } from './routes/MainRoutes';

function App() {

  return (
    <>
      <Header />
      <Introduction />
      <MainRouter />
    </>
  )
}

export default App;
