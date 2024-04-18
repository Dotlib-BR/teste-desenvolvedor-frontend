import CopyIdSuccess from "../components/CopyIdSuccess";
import Filters from "../components/Filters";
import MedicineList from "../components/MedicineList";
import PageHeading from "../components/PageHeading";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <main>
      <PageHeading />
      <Filters />
      <MedicineList />
      <Pagination />
      <CopyIdSuccess />
    </main>
  );
};

export default Home;
