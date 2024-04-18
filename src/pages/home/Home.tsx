import { useEffect, useState } from 'react';
import { DataServices } from '../../shared/services/api/data/DataService';
import { MedicineInterface } from '../../shared/services/api/interfaces/medicineInterface';
import Container from '../../shared/components/Container';
import Table from '../../shared/components/Table';
import Line from '../../shared/components/Line/Line';

export function Home() {
    const [medicines, setMedicines] = useState<MedicineInterface[]>([]);

    useEffect(() => {
        DataServices.getAll().then((result) => {
            if (result instanceof Error) {
                alert(result);
            } else {
                setMedicines(result);
            }
        });
    }, []);

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
                                patient="oi"
                                professional="oi"
                            />
                        );
                    })}
                </Table>
            </Container>
        </>
    );
}
