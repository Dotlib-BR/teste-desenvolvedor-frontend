import React from 'react';
import styles from './Input.module.css';

type PropsInput = React.ComponentProps<'input'>;

const Input = ({...props}: PropsInput) => {
  return (
    <input className={styles.Input} {...props}/>
  )
}

export default Input;