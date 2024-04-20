import { IPagination } from "../../@types/pagination";

export interface PaginationProps extends IPagination {
    onPageChange: (page: number) => void;
}

export interface PaginationButtonsProps {
    children: React.ReactNode;
    onClick: () => void;
    key?: string | undefined;
    className: string;
};
