import React from 'react';
import { IError } from './interfaces';

export const Error = ({ error }: IError): React.ReactElement => {
    return <p className="error">{error}</p>;
};
