import React from 'react';

interface TypesInterface {
    text: {
        Regex: RegExp;
        message: string;
    };
}

const types: TypesInterface = {
    text: {
        Regex: /^[a-zA-Z\s]+$/,
        message: 'Não utilize caracteres especiais ou números',
    },
};

const useForm = (type: keyof TypesInterface) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validate(value: string) {
        if (value.length === 0) {
            setError('Preencha o campo com um valor');
            return false;
        } else if (types[type] && !types[type].Regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError('');
            return true;
        }
    }

    function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        error,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default useForm;
