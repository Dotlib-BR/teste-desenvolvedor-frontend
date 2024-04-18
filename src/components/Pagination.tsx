import Arrow from "../assets/Icons/Arrow";
import { useMedicineData } from "../context/MedicineDataContext";

const Pagination = () => {
  const { paginationInfo, setPaginationInfo, setSearchTerm } = useMedicineData();
  const pageNumbers = Array.from(
    { length: paginationInfo.pages },
    (_, index) => index + 1
  );

  const handleArrows = (number: number) => {
    const currentPage = paginationInfo.currentPage;

    setPaginationInfo((prev) => ({
      ...prev,
      currentPage: currentPage + number,
    }));

    setSearchTerm({ name: "", company: "" });

  };

  const handleNumbers = (number: number) => {
    setPaginationInfo((prev) => ({
      ...prev,
      currentPage: number,
    }));

    setSearchTerm({ name: "", company: "" });
  };

  return (
    <section className="pagination">
      <button
        onClick={() => handleArrows(-1)}
        className="pagination__previous"
        disabled={paginationInfo.currentPage === 1}
      >
        <Arrow disabled={paginationInfo.currentPage === 1} /> Anterior
      </button>
      <ul className="pagination__numbers">
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => handleNumbers(number)} className={paginationInfo.currentPage === number ? "selected" : ""}>
            {number}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleArrows(1)}
        className="pagination__next"
        disabled={paginationInfo.currentPage === paginationInfo.pages}
      >
        Próxima{" "}
        <Arrow disabled={paginationInfo.currentPage === paginationInfo.pages} />
      </button>
    </section>
  );
};

export default Pagination;
