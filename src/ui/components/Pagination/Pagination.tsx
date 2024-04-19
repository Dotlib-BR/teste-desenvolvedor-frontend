import { useSearchContext } from "../../../context/search-context";
import { ResponseLeafletPaginationMapper } from "../../../service/types";
import { Button } from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Pagination.scss";

interface PaginationProps {
  items: ResponseLeafletPaginationMapper;
}

export const Pagination = ({ items }: PaginationProps) => {
  const { searchLeafletPagination } = useSearchContext();
  const { pages, prev, next } = items;
  const handleNewPage = (pageNumber: number | null) => {
    if (pageNumber) {
      searchLeafletPagination(pageNumber);
    }
  };
  return (
    <div className="pagination-container">
      <Button iconButton onClick={() => handleNewPage(prev)}>
        <FaAngleLeft />
      </Button>
      {[...Array(pages)].map((_, index) => (
        <Button
          key={index + 1}
          onClick={() => handleNewPage(index + 1)}
          iconButton
        >
          {index + 1}
        </Button>
      ))}
      <Button iconButton onClick={() => handleNewPage(next)}>
        <FaAngleRight />
      </Button>
    </div>
  );
};
