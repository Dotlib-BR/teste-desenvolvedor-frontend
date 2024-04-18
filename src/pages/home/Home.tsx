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
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button/Button';
import IconSearch from '../../shared/icons/Search/IconSeacrh';
import IconDelete from '../../shared/icons/Delete/IconDelete';

export function Home() {
    // Data
    const [medicines, setMedicines] = useState<MedicineInterface[]>([]);
    const [pageSettings, setPageSettings] = useState<Partial<ApiResult> | null>(
        null,
    );
    const [page, setPage] = useState(1);

    // Values
    const [medicineValue, setMedicineValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [search, setSearch] = useState<string[]>([]);

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

    const handleSearch = () => {
        if (medicineValue.length > 0) setSearch([...search, medicineValue]);

        if (companyValue.length > 0) setSearch([...search, companyValue]);

        setMedicineValue('');
        setCompanyValue('');

        handleFilter();
    };

    const handleFilter = async () => {
        DataServices.getByName(medicineValue, page).then((result) => {
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
    };

    const handleDelete = (index: number) => {
        setSearch((prevSearch) => prevSearch.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <div className="searchContainer">
                Filtro:
                <div className="searchContainerTwo">
                    <Input
                        type="search"
                        placeholder="Medicamento"
                        value={medicineValue}
                        setValue={setMedicineValue}
                    />

                    <Input
                        type="search"
                        placeholder="Empresa"
                        value={companyValue}
                        setValue={setCompanyValue}
                    />

                    <Button onClick={() => handleSearch()}>
                        <IconSearch height="15px" /> Pesquisar resultados
                    </Button>
                </div>
                {search.map((item, index) => {
                    return (
                        <span
                            className="filterItem"
                            key={index}
                            onClick={() => handleDelete(index)}
                        >
                            <IconDelete height="10px" /> {item}
                        </span>
                    );
                })}
            </div>
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
    );
}
