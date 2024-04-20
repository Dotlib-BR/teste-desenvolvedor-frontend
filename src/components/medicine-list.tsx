import { MedicineData } from '../types/medicine';
import MedicineItem from './medicine-item';

interface MedicineListProps {
    data: MedicineData[];
}
const MedicineList = ({ data }: MedicineListProps) => {
    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data.slice(0, 10).map(medicine => (
                    <MedicineItem medicine={medicine} key={medicine.id} />
                ))}
            </ul>
        </div>
    );
};

export default MedicineList;
