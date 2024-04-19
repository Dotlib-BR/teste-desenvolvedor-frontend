export default function pagination(
  dataNewToOld,
  dataOLdToNew,
  searchbarResult,
  currentPage,
  itemsPerPage,
  setCurrentPage
) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDataNewToOld = dataNewToOld.slice(startIndex, endIndex);
  const paginatedDataOLdToNew = dataOLdToNew.slice(startIndex, endIndex);
  let paginatedDataSearchResult;

  if (paginatedDataOLdToNew) {
    paginatedDataSearchResult = searchbarResult.slice(startIndex, endIndex);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalNumberOfPagesNewToOld = Math.ceil(dataNewToOld.length / itemsPerPage);
    const totalNumberOfPagesOldToNew = Math.ceil(dataOLdToNew.length / itemsPerPage);
    const totalNumberOfPagesSearchResult = Math.ceil(searchbarResult.length / itemsPerPage);
  
    let totalNumberOfPages;
    if (paginatedDataNewToOld) {
      totalNumberOfPages = totalNumberOfPagesNewToOld;
    } else if (paginatedDataOLdToNew) {
      totalNumberOfPages = totalNumberOfPagesOldToNew;
    } else {
      totalNumberOfPages = totalNumberOfPagesSearchResult;
    }
  
    if (currentPage < totalNumberOfPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return {
    paginatedDataNewToOld,
    paginatedDataOLdToNew,
    paginatedDataSearchResult,
    handlePreviousPage,
    handleNextPage,
  };
}
