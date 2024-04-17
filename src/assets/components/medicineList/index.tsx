import { useContext, useState, useEffect, ChangeEvent } from "react";

//libs
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

//services
import { ApiContext } from "../../services/context/index";

//types
import { Medicine } from "../../../types";

//images
import magnifyingGlass from "/magnifyingGlass.svg";

//styles
import "./style.sass";

const MedicineList: React.FC = () => {
  const { medicines, loading } = useContext(ApiContext);
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1); // Define a página atual como 1 por padrão
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [sortedMedicines, setSortedMedicines] = useState<Medicine[]>([]);
  const location = useLocation(); // Para obter a localização atual

  useEffect(() => {
    const queryParams = queryString.parse(location.search); // Obtém os parâmetros da URL
    const page = parseInt(queryParams.page as string) || 1; // Recupera o número da página da URL, se não houver, usa 1
    setCurrentPage(page); // Define a página atual com base nos parâmetros da URL
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString()); // Armazena a página atual no localStorage
  }, [currentPage]);

  useEffect(() => {
    const sorted = [...medicines].sort((a, b) => {
      const dateA = new Date(a.published_at).getTime();
      const dateB = new Date(b.published_at).getTime();
      return dateB - dateA;
    });
    setSortedMedicines(sorted as Medicine[]);
  }, [medicines]);

  useEffect(() => {
    const filtered = sortedMedicines.filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(query) ||
        medicine.company.toLowerCase().includes(query)
    );
    setFilteredMedicines(filtered);
  }, [query, sortedMedicines]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value.toLowerCase();
    setQuery(keyword);
  };

  const itemsPerPage = 10;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const generatePageUrl = (page: number) => {
    const queryParams = queryString.stringify({ page });
    return `?${queryParams}`;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMedicines.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (loading) return <div>Loading...</div>;

  return (
    <section className="medicine__list">
      <div className="search__bar">
        <img src={magnifyingGlass} alt="Search" />
        <input
          type="text"
          placeholder="Pesquise pelo nome ou fabricante"
          value={query}
          onChange={handleSearch}
        />
      </div>

      {filteredMedicines.length > itemsPerPage && (
        <section className="pagination">
          {Array(Math.ceil(filteredMedicines.length / itemsPerPage))
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
              >
                <button onClick={() => paginate(index + 1)}>
                  <Link to={generatePageUrl(index + 1)}>{index + 1}</Link>
                </button>
              </div>
            ))}
        </section>
      )}

      {currentItems.length === 0 ? (
        <section className="no__results">
          <p>No results found for "{query}".</p>
        </section>
      ) : (
        currentItems.map((medicine) => (
          <Link to={`/medicine/${medicine.id}`}>
            <section key={medicine.id} className="medicine__card">
              <p>
                {medicine.name} <span>({medicine.company})</span>
              </p>
            </section>
          </Link>
        ))
      )}

      
    </section>
  );
};

export default MedicineList;
