import React from 'react';
import { Error } from '../Helper/Error/Error';
import { InputProps } from './interfaces';

export const Input = ({
    value,
    placeholder,
    name,
    label,
    type,
    onChange,
    error,
}: InputProps): React.ReactElement => {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}:</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={name}
            />
            {error && <Error error={error} />}
        </div>
    );
};
