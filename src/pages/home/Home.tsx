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
import { useNavigate, useLocation } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    // Data
    const [medicines, setMedicines] = useState<MedicineInterface[]>([]);
    const [pageSettings, setPageSettings] = useState<Partial<ApiResult> | null>(
        null,
    );
    const [page, setPage] = useState(1);

    // Values
    const [medicineValue, setMedicineValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [search, setSearch] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('name');
        const company = queryParams.get('company');

        if (name && company) {
            DataServices.getByNameAndCompany(page, name, company).then(
                (result) => {
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
                },
            );
        } else if (name) {
            DataServices.getByName(page, name).then((result) => {
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
        } else if (company) {
            DataServices.getByCompany(page, company).then((result) => {
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
        } else {
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
        }
    }, [page, location.search]);

    const handleSearch = () => {
        if (medicineValue.length > 0 && companyValue.length > 0) {
            setSearch(true);
            navigate(`/?name=${medicineValue}&company=${companyValue}`);

            setMedicineValue('');
            setCompanyValue('');
            return;
        }

        if (medicineValue.length > 0) {
            setSearch(true);
            navigate(`/?name=${medicineValue}`);

            setMedicineValue('');
            setCompanyValue('');
            return;
        }

        if (companyValue.length > 0) {
            setSearch(true);
            navigate(`/?company=${companyValue}`);

            setMedicineValue('');
            setCompanyValue('');
            return;
        }
    };

    const handleCancelSearch = () => {
        navigate(`/`);
        setSearch(false);
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
                    {search ? (
                        <Button onClick={() => handleCancelSearch()}>
                            <IconDelete height="15px" /> Cancelar pesquisa
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
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
