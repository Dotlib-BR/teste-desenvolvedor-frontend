import React from 'react';
import SearchForm from './SearchForm';

const Search = (): React.ReactElement => {
    return (
        <>
            <h3 className="weight-bold text-center">
                Encontre o medicamento certo
            </h3>
            <p className="mt-2 text-center">
                Busque pelo nome do medicamento ou do laboratório desejado.
            </p>

            <SearchForm />
        </>
    );
};

export default Search;
