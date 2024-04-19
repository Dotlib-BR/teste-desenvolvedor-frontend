import { PageButtonProps } from '../../interface/page-button-props'

import s from './style.module.sass'

export default function ButtonPagination({
    pageNumber,
    isActive,
    onClick,
}: PageButtonProps) {
    return (
        <button
            onClick={onClick}
            className={isActive ? s.activeBtn : s.btnNotActive}
        >
            {pageNumber}
        </button>
    )
}
