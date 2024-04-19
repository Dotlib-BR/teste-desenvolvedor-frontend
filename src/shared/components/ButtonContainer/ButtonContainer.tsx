import './ButtonContainer.css';

import IconsArrow from '../../icons/Arrow/IconArrow';
import { ApiResult } from '../../services/api/interfaces/MedicineInterface';

interface ButtonContainerProps {
    pageSettings: Partial<ApiResult> | null;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page: number;
}

export default function ButtonContainer({
    pageSettings,
    setPage,
    page,
}: ButtonContainerProps) {
    const handleFirst = () => {
        if (!pageSettings?.first) return;

        setPage(pageSettings.first);
    };

    const handleNext = () => {
        if (page === pageSettings?.pages) return;
        setPage(page + 1);
    };

    const handleBack = () => {
        if (page === 1) return;
        setPage(page - 1);
    };

    const handleLast = () => {
        if (!pageSettings?.last) return;

        setPage(pageSettings.last);
    };

    return (
        <div className="buttonMainContainer">
            <p className="countItems">
                Total de <b>{pageSettings?.items}</b> item(s)
            </p>

            <div className="buttons">
                <p>
                    Página {page} de {pageSettings?.pages}
                </p>

                <div className="buttonsContainer">
                    <button
                        onClick={() => handleFirst()}
                        className="button first"
                    >
                        <IconsArrow name="doubleArrowLeft" />
                    </button>
                    <button
                        onClick={() => handleBack()}
                        className="button back"
                    >
                        <IconsArrow name="arrowLeft" />
                    </button>
                    <button onClick={() => handleNext()} className="button">
                        <IconsArrow name="arrowRight" />
                    </button>
                    <button
                        onClick={() => handleLast()}
                        className="button last"
                    >
                        <IconsArrow name="doubleArrowRight" />
                    </button>
                </div>
            </div>
        </div>
    );
}
