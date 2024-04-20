import { ChangeEventHandler } from "react";

export type InputProps = {
    value: string;
    placeholder: string;
    name: string;
    label: string | null;
    type: string;
    error: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};