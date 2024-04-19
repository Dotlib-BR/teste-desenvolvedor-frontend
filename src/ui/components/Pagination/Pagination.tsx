import { useSearchContext } from "../../../context/search-context";
import { ResponseLeafletPaginationMapper } from "../../../service/types";
import { Button } from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Pagination.scss";
import { useState } from "react";

interface PaginationProps {
  items: ResponseLeafletPaginationMapper;
}

export const Pagination = ({ items }: PaginationProps) => {
  const { searchLeafletPagination, searchMode, searchText } =
    useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, prev, next } = items;
  const handleNewPage = (pageNumber: number | null) => {
    if (pageNumber) {
      setCurrentPage(pageNumber);
      searchLeafletPagination(pageNumber, searchMode, searchText);
    }
  };
  return (
    <div className="pagination-container">
      <Button iconButton onClick={() => handleNewPage(prev)} disabled={!prev}>
        <FaAngleLeft />
      </Button>
      {[...Array(pages)].map((_, index) => (
        <Button
          key={index + 1}
          onClick={() => handleNewPage(index + 1)}
          iconButton
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </Button>
      ))}
      <Button iconButton onClick={() => handleNewPage(next)} disabled={!next}>
        <FaAngleRight />
      </Button>
    </div>
  );
};
