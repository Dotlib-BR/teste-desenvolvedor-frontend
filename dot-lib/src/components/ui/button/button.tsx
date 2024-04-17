import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'
import { icons } from '../../../assets/icons'

type IconsProps = keyof typeof icons

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  iconLeft?: IconsProps
  iconRigth?: IconsProps
  className?: string
  widthFull?: boolean
  disabled?: boolean
  disablePagination?: boolean
}

export function Button({
  color,
  loading,
  iconLeft,
  iconRigth,
  children,
  className,
  widthFull,
  disablePagination,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
      ${styles.button} 
      ${color && styles[color]} 
      ${widthFull && styles.widthFull}
      ${disabled && styles.disabled}
      ${disablePagination && styles.disablePagination}
      ${className}
      `}
      {...rest}
      disabled={loading || disabled}
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
