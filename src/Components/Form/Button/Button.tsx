import styles from './Button.module.css';

type ButtonType = React.ComponentProps<'button'> & {
  name: string;
}

const Button = ({name, ...props}: ButtonType) => {
  return (
    <button className={styles.Button} {...props}>{name}</button>
  )
}

export default Button;