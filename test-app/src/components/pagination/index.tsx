import { useMemo } from "react";
import "./styles.css";
interface PaginationProps<T> {
  pagination: Pagination<T>;
  onSelectPage: (page: number) => void;
  showTotal?: boolean;
}

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const Pagination = <P,>({
  pagination,
  onSelectPage,
  showTotal = false,
}: PaginationProps<P>) => {
  let totalRecords = pagination?.items,
    pageLimit = 10,
    pageNeighbours = 3;
  pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
  totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

  pageNeighbours =
    typeof pageNeighbours === "number"
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 3;

  const totalPages = pagination.last ?? 0;

  const fetchPageNumbers = () => {
    const currentPage = pagination.next - 1;

    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages: Array<string | number> = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };
  const goToPage = (page: number) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));

    onSelectPage(currentPage);
  };

  const onClick = (position: string | number | null) => {
    if (!position) return;
    if (typeof position === "string") {
      const posPage = position.indexOf("page=") + 5;
      onSelectPage(Number(position.substring(posPage)));
      return;
    }
    onSelectPage(position);
  };

  const arrayPages = useMemo(() => fetchPageNumbers(), [pagination]);
  if (!pagination) return null;
  return (
    <nav
      data-testid="pagination-container"
      className={`mt-5 ${
        showTotal &&
        "d-flex flex-column align-items-center justify-content-center"
      }`}
    >
      {showTotal && (
        <span className="mb-3">
          Mostrando:
          {pagination?.items
            ? ` ${pagination?.data.length}/${pagination.items}`
            : " 0/0"}
        </span>
      )}
      <ul className="pagination pagination-lg align-items-center justify-content-center flex-wrap w-100">
        {arrayPages.map((_pag, index) => {
          const pos: any = _pag;
          if (_pag === LEFT_PAGE)
            return (
              <li
                key={pos}
                onClick={() => onClick(pagination.prev)}
                className="page-item btn p-0"
              >
                <span className="page-link">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Anterior</span>
                </span>
              </li>
            );
          if (_pag === RIGHT_PAGE)
            return (
              <li
                key={pos}
                onClick={() => onClick(pagination.next)}
                className="page-item btn p-0"
              >
                <span className="page-link">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Próxima</span>
                </span>
              </li>
            );
          return (
            <li
              data-testid={"page-number-" + pos}
              onClick={() => goToPage(pos)}
              key={pos}
              className={`page-item btn p-0 ${
                pos === pagination.next - 1 && "active"
              }`}
            >
              <span className="page-link">{pos}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
