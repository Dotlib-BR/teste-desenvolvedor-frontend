import React from 'react';
import { PaginationButtonsProps } from './interfaces';

const PaginationButtons = ({
    children,
    onClick,
    className,
}: PaginationButtonsProps): React.ReactElement => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default PaginationButtons;
