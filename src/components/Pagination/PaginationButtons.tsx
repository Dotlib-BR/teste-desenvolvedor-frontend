import React from 'react';
import { PaginationButtonsProps } from './interfaces';

const PaginationButtons = ({
    children,
    onClick,
    key,
    className,
}: PaginationButtonsProps): React.ReactElement => {
    return (
        <button onClick={onClick} key={key} className={className}>
            {children}
        </button>
    );
};

export default PaginationButtons;
