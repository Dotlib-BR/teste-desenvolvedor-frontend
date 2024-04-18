import CopyIdSuccess from "./components/CopyIdSuccess";
import Filters from "./components/Filters";
import Header from "./components/Header";
import MedicineList from "./components/MedicineList";
import Pagination from "./components/Pagination";
import "./scss/main.scss";

function App() {
  return (
    <main>
      <Header />
      <Filters />
      <MedicineList />
      <Pagination />
      <CopyIdSuccess />
    </main>
  );
}

export default App;
