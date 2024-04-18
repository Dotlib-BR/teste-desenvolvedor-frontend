import { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
    type: 'search' | 'submit';
    value?: string;
    placeholder?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({
    type,
    placeholder,
    value,
    setValue,
}: InputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!setValue) return;

        setValue(e.target.value);
    };
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
}
