export default function paginate(dataNewToOld, dataOLdToNew, currentPage, itemsPerPage, setCurrentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDataNewToOld = dataNewToOld.slice(startIndex, endIndex);
  const paginatedDataOLdToNew = dataOLdToNew.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return {
    paginatedDataNewToOld,
    paginatedDataOLdToNew,
    handlePreviousPage,
    handleNextPage
  };
}