
import { Medicine } from "../components/Medicine/Medicine";
import { Search } from "../components/Search/Search";
import './Home.scss';

export const Home = () => {
  return (
    <div>
      <Search />
      <Medicine />
    </div>
  );
};