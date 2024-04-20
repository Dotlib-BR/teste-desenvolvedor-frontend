import React from 'react';
import { IMedicine } from '../../../../@types/medicine';
import { useMedicine } from '../../../../hooks';
import useForm from '../../../../hooks/userForm';
import { Input } from '../../../../components';

const SearchForm = (): React.ReactElement => {
    const medicine = useForm('text');

    const { originalData, setData } = useMedicine();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (medicine.validate()) {
            try {
                const filteredData = originalData.filter(
                    (item: IMedicine) =>
                        item.name
                            .toLowerCase()
                            .includes(medicine.value.toLowerCase()) ||
                        item.company
                            .toLowerCase()
                            .includes(medicine.value.toLowerCase())
                );
                setData(filteredData);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        } else {
            setData(originalData);
        }
    };

    return (
        <form className="mt-3 flex-center" onSubmit={handleSubmit}>
            <Input
                type="text"
                label={null}
                name="medicine"
                placeholder="Digite o medicamento ou laboratório"
                {...medicine}
            />

            <button type="submit" className="primary-button ml-2">
                Buscar
            </button>
        </form>
    );
};

export default SearchForm;
