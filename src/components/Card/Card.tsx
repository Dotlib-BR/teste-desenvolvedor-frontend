import React from 'react';
import PillSVG from '../../assets/pill.svg?react';
import { useMedicine } from '../../hooks';
import { CardProps } from './interfaces';

export const Card = ({
    name,
    company,
    publishDate,
}: CardProps): React.ReactElement => {
    const { data } = useMedicine();

    function formatDate(publishDate: string) {
        const dataObj = new Date(publishDate);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    const formattedDate = formatDate(publishDate);

    function getDocument(type: string): string | undefined {
        const item = data.find((item) => {
            return item.documents.find((document) => document.type === type);
        });
        const document = item?.documents.find(
            (document) => document.type === type
        );
        return document?.url;
    }

    return (
        <div className="card mt-2 mx-2">
            <div className="flex-center">
                <PillSVG />
            </div>

            <h6 className="mt-3  line-clamp">
                <span className="weight-bold">Nome: </span>
                <span title={name}>{name}</span>
            </h6>

            <h6 className="my-1">
                <span className="weight-bold">Laboratório: </span>
                <span title={company}>{company}</span>
            </h6>

            <h6>
                <span className="weight-bold">Data de publicação: </span>
                {formattedDate}
            </h6>

            <a
                href={getDocument('PATIENT')}
                target="_blank"
                download={getDocument('PATIENT')}
                className="download-btn mt-3"
            >
                Bula do paciente
            </a>
            <a
                href={getDocument('PROFESSIONAL')}
                target="_blank"
                download
                className="download-btn mt-2"
            >
                Bula do profissional
            </a>
        </div>
    );
};
