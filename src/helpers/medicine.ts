import { MedicineData } from '../types/medicine';

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