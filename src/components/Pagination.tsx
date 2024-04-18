import Arrow from "../assets/Icons/Arrow";
import { useMedicineData } from "../context/MedicineDataContext";

const Pagination = () => {
  const { paginationInfo, setPaginationInfo } = useMedicineData();
  const pageNumbers = Array.from({ length: paginationInfo.pages }, (_, index) => index + 1);

  const handleArrows = (type: string) => {
    const currentPage = paginationInfo.currentPage;
    let newPage = currentPage;

    if (type === 'previous') {
      newPage = currentPage > 1 ? currentPage - 1 : currentPage;
    } else if (type === 'next') {
      newPage = currentPage < paginationInfo.pages ? currentPage + 1 : currentPage;
    }

    setPaginationInfo((prev) => ({
      ...prev,
      currentPage: newPage
    }));
  };

  const handleNumbers = (number: number) => {
    setPaginationInfo((prev) => ({
        ...prev,
        currentPage: number
    }))
  }

  return <section>
    <button onClick={() => handleArrows('previous')}><Arrow /></button>
    <ul>{pageNumbers.map((number) => <li key={number} onClick={() => handleNumbers(number)}>{number}</li>)}</ul>
    <button onClick={() => handleArrows('next')}><Arrow /></button>
  </section>;
};

export default Pagination;
