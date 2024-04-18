import AddressBar from './components/AddressBar';
import SearchBar from './components/SearchBar';

const App = () => {
  const handleSearch = (searchTerm) => {
   
    console.log("Search term:", searchTerm);
  };

  return (
    <div>
      
      <AddressBar onSearch={handleSearch} />
      
      
    </div>
  );
};

export default App;
