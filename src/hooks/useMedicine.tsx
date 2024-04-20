import { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

export const useMedicine = () => useContext(MedicineContext);
