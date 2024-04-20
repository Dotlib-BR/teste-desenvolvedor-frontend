import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
    const handlePreviusPage = () => {
        setPage(page => page - 1);
    };

    const handleNextPage = () => {
        setPage(page => page + 1);
    };
    return (
        <div className="flex items-center justify-center gap-3">
            <button
                className={`rounded border border-gray-900 ${
                    page === 1 && 'opacity-60'
                }`}
                onClick={handlePreviusPage}
                disabled={page === 1}
            >
                <ArrowLeft className='text-xl md:text-3xl' />
            </button>
            <p className='text-sm sm:text-base'>
                Página {page} de {totalPages}
            </p>
            <button
                className={`rounded border border-gray-900 ${
                    page === totalPages && 'opacity-60'
                }`}
                onClick={handleNextPage}
                disabled={page === totalPages}
            >
                <ArrowRight className='text-xl sm:text-3xl' />
            </button>
        </div>
    );
};

export default Pagination;
