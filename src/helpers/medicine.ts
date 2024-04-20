import { MedicineData } from '../types/medicine';

export const filteredMedicines = (
    medicines: MedicineData[],
    searchText: string
) => {
    return medicines.filter(
        medicine =>
            medicine.name.toLowerCase().includes(searchText.toLowerCase()) ||
            medicine.company.toLowerCase().includes(searchText.toLowerCase())
    );
};

export const orderByDateMedicines = (medicines: MedicineData[]) => {
    return medicines.sort((a, b) => {
        return (
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        );
    });
};

export const calculateTotalPages = (filteredMedicinesLength: number) => {
    return Math.ceil(filteredMedicinesLength / 10);
};

