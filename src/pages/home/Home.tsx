import './Home.css';

import {
    ApiResult,
    MedicineInterface,
} from '../../shared/services/api/interfaces/MedicineInterface';
import { useEffect, useState } from 'react';
import { DataServices } from '../../shared/services/api/data/DataService';
import Container from '../../shared/components/Container';
import Table from '../../shared/components/Table';
import Line from '../../shared/components/Line/Line';
import IconsArrow from '../../shared/icons/Arrow/IconArrow';

export function Home() {
    const [medicines, setMedicines] = useState<MedicineInterface[]>([]);
    const [pageSettings, setPageSettings] = useState<Partial<ApiResult> | null>(
        null,
    );
    const [page, setPage] = useState(1);

    useEffect(() => {
        DataServices.getAll(page).then((result) => {
            if (result instanceof Error) {
                alert(result);
            } else {
                setMedicines(result.data);

                const settings = {
                    first: result.first,
                    prev: result.prev,
                    next: result.next,
                    last: result.last,
                    pages: result.pages,
                    items: result.items,
                };
                setPageSettings(settings);
            }
        });
    }, [page]);

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
        <>
            <Container>
                <Table>
                    {medicines.map((medicine) => {
                        return (
                            <Line
                                key={medicine.id}
                                id={medicine.id}
                                name={medicine.name}
                                company={medicine.company}
                                date={medicine.published_at}
                                patient={medicine.documents[0].url}
                                professional={medicine.documents[1].url}
                            />
                        );
                    })}
                </Table>
                <div className="buttonMainContainer">
                    <p>
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
                            <button
                                onClick={() => handleNext()}
                                className="button"
                            >
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
            </Container>
        </>
    );
}
