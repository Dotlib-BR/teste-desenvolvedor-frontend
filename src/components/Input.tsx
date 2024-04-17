import { ComponentProps } from 'react';
import '../styles/components/input.sass';

interface InputProps extends ComponentProps<'input'> {
  title: string;
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <div className='container-input'>
      <h4>{title}</h4>
      <input {...rest} />
    </div>
  );
}