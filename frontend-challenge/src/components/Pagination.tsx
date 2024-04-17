import "../styles/pagination.sass";
import { useMedications } from "../store/UseMedications";

export const Pagination = () => {
  const { pagination, currentPage, setCurrentPage } = useMedications();

  if (!pagination) {
    return null;
  }

  const { first, prev, next, pages } = pagination;

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(first)} disabled={currentPage === 1}>Primeira</button>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={!prev}>Anterior</button>
      {Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
        <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)} className={pageNumber === currentPage ? "active" : ""}>{pageNumber}</button>
      ))}
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={!next}>Próxima</button>
      <button onClick={() => setCurrentPage(pages)} disabled={currentPage === pages}>Última</button>
    </div>
  );
};
