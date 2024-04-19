export default function pagination(dataNewToOld, dataOLdToNew, searchbarResult, currentPage, itemsPerPage, setCurrentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDataNewToOld = dataNewToOld.slice(startIndex, endIndex);
  const paginatedDataOLdToNew = dataOLdToNew.slice(startIndex, endIndex);
  let paginatedDataSearchResult;

  if (paginatedDataOLdToNew){
    paginatedDataSearchResult = searchbarResult.slice(startIndex, endIndex);
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return {
    paginatedDataNewToOld,
    paginatedDataOLdToNew,
    paginatedDataSearchResult,
    handlePreviousPage,
    handleNextPage
  };
}