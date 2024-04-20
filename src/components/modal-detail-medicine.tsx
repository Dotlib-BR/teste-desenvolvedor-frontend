import { X } from '@phosphor-icons/react';
import { MedicineData } from '../types/medicine';
import { format } from 'date-fns';

interface ModalDetailMedicineProps {
    open: boolean;
    setOpen: () => void;
    medicine: MedicineData;
}
const ModalDetailMedicine = ({ open, setOpen, medicine }: ModalDetailMedicineProps) => {
    const patientLeaflet = medicine.documents.filter(
        doc => doc.type === 'PATIENT'
    )[0].url;

    const professionalLeaflet = medicine.documents.filter(
        doc => doc.type === 'PROFESSIONAL'
    )[0].url;

    const activePrinciples = medicine.active_principles.map(
        principle => principle.name
    );
    const activePrinciplesString = activePrinciples.join(', ');

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            setOpen();
        }
    };

    if (open) {
        return (
            <div
                className="fixed inset-0 z-10 bg-[#282828c3]"
                onClick={handleOverlayClick}
            >
                <div className="fixed h-screen w-screen sm:h-auto sm:w-auto sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] bg-white lg:w-[500px] rounded-lg py-10 px-8 flex flex-col gap-">
                    <div className="w-full max-w-[200px] mx-auto">
                        <img
                            className="w-full"
                            src="./medicine.jpg"
                            alt={medicine.name}
                        />
                    </div>
                    <p className="text-sm font-bold text-center capitalize">
                        {medicine.name}
                    </p>
                    <p className="text-sm capitalize">
                        <span className="font-semibold text-base">
                            Laboratório:{' '}
                        </span>
                        {medicine.company}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold text-base">
                            Data de publicação:{' '}
                        </span>
                        {format(new Date(medicine.published_at), 'dd/MM/yyyy')}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold text-base">
                            Princípio ativo:{' '}
                        </span>{' '}
                        {activePrinciplesString}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-5">
                        <a
                            href={patientLeaflet}
                            target="_blank"
                            rel="noopener"
                            className="bg-blue-200 hover:bg-blue-200/80 rounded px-5 py-1 font-bold flex min-w-[165px] max-w-[165px] mx-auto items-center justify-center text-sm sm:text-base"
                        >
                            bula profissional
                        </a>
                        <a
                            href={professionalLeaflet}
                            target="_blank"
                            rel="noopener"
                            className="bg-blue-200 hover:bg-blue-200/80 rounded px-5 py-1 font-bold flex min-w-[165px] max-w-[165px] mx-auto items-center justify-center text-sm sm:text-base"
                        >
                            bula paciente
                        </a>
                    </div>
                    <button
                        onClick={setOpen}
                        className="absolute top-2 right-2"
                    >
                        <X size={26} />
                    </button>
                </div>
            </div>
        );
    }

    return null;
};

export default ModalDetailMedicine;
