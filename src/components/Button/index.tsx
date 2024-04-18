import React, { ButtonHTMLAttributes } from 'react'

import { Spinner, StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'primary' | 'error'
  disabled?: boolean
  loading?: boolean
  textLoading?: string
  icon?: React.ReactNode
  size?: 'sm' | 'md'
  ref?: React.RefObject<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color = 'primary',
  icon,
  loading,
  textLoading,
  size = 'md',
  ref,
  ...rest
}) => {
  return (
    <StyledButton
      ref={ref}
      size={size}
      color={disabled ? 'disabled' : color}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner /> : icon || null}
      {loading && textLoading ? textLoading : children}
    </StyledButton>
  )
}
