import { MedicineData } from '../types/medicine';

interface MedicineItemProps {
    medicine: MedicineData;
}

const MedicineItem = ({ medicine }: MedicineItemProps) => {
    return (
        <li className="rounded-lg border shadow-sm flex flex-col gap-2  overflow-hidden pb-3 bg-blue-200  md:min-h-[320px] xl:max-h-[320px] hover:shadow-lg">
            <div className="bg-white">
                <img
                    src="./medicine.jpg"
                    alt={medicine.name}
                    className="w-full max-h-[250px] object-contain"
                />
            </div>
            <div className="text-center px-3 flex flex-col gap-1 md:gap-2">
                <p
                    className="text-sm font-bold overflow-hidden text-ellipsis line-clamp-1 md:line-clamp-2 leading-4"
                    title={medicine.name}
                >
                    {medicine.name}
                </p>
                <p
                    title={medicine.company}
                    className="text-xs overflow-hidden text-ellipsis line-clamp-1"
                >
                    {medicine.company}
                </p>
            </div>
        </li>
    );
};

export default MedicineItem;
