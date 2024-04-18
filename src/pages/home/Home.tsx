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
import ButtonContainer from '../../shared/components/ButtonContainer/ButtonContainer';

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
                <ButtonContainer
                    page={page}
                    pageSettings={pageSettings}
                    setPage={setPage}
                />
            </Container>
        </>
    );
}
