import { MedicineData } from '../types/medicine';
import MedicineItem from './medicine-item';

interface MedicineListProps {
    data: MedicineData[];
    page: number;
}
const MedicineList = ({ data, page }: MedicineListProps) => {
    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data.slice((page - 1) * 10, page * 10).map(medicine => (
                    <MedicineItem medicine={medicine} key={medicine.id} />
                ))}
            </ul>
        </div>
    );
};

export default MedicineList;
