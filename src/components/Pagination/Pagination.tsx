import React from 'react';
import IconNext from '../../assets/icon-next.svg?react';
import IconPrev from '../../assets/icon-prev.svg?react';
import IconSkipFirst from '../../assets/icon-skip-first.svg?react';
import IconSkipLast from '../../assets/icon-skip-last.svg?react';
import PaginationButtons from './PaginationButtons';
import { PaginationProps } from './interfaces';

export const Pagination = ({
    first,
    prev,
    last,
    next,
    pages,
    onPageChange,
}: PaginationProps): React.ReactElement => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Array(pages)
        .fill(0)
        .map((_, index) => index + 1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    return (
        <div className="flex-center mt-2">
            <PaginationButtons
                className="pagination-buttons"
                onClick={() => handlePageChange(first || 1)}
            >
                <IconSkipFirst />
            </PaginationButtons>

            <PaginationButtons
                className="pagination-buttons"
                onClick={() => handlePageChange(prev || 1)}
            >
                <IconPrev />
            </PaginationButtons>

            {totalPages.map((page) => (
                <PaginationButtons
                    key={String(page)}
                    className={`pagination-buttons  ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </PaginationButtons>
            ))}

            <PaginationButtons
                className="pagination-buttons"
                onClick={() => handlePageChange(next || 1)}
            >
                <IconNext />
            </PaginationButtons>

            <PaginationButtons
                className="pagination-buttons"
                onClick={() => handlePageChange(last || 1)}
            >
                <IconSkipLast />
            </PaginationButtons>

            <p className="ml-2">
                Página {currentPage} de {pages}
            </p>
        </div>
    );
};
