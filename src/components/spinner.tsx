import { CircleNotch } from '@phosphor-icons/react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <CircleNotch size={40} className="animate-spin text-blue-900" />
        </div>
    );
};

export default Spinner;
