import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'
import { icons } from '../../../assets/icons'

type IconsProps = keyof typeof icons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  iconLeft?: IconsProps
  iconRigth?: IconsProps
  circle?: boolean
  className?: string
  widthFull?: boolean
}

export function Button({
  color,
  loading,
  iconLeft,
  iconRigth,
  circle,
  children,
  className,
  widthFull,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
      ${styles.button} 
      ${circle && styles.circle} 
      ${color && styles[color]} 
      ${widthFull && styles.widthFull}
      ${className}
      `}
      {...rest}
      disabled={loading}
    >
      {loading ? (
        'Carregando...'
      ) : (
        <>
          {iconLeft && <span className={styles.icon}>{icons[iconLeft]}</span>}
          {children}
          {iconRigth && <span className={styles.icon}>{icons[iconRigth]}</span>}
        </>
      )}
    </button>
  )
}
