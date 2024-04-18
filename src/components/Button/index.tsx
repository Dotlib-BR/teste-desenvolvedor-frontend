import React, { ButtonHTMLAttributes } from 'react'

import { Spinner, StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'primary' | 'error'
  disabled?: boolean
  loading?: boolean
  textLoading?: string
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color = 'primary',
  icon,
  loading,
  textLoading,
  ...rest
}) => {
  return (
    <StyledButton
      color={disabled ? 'disabled' : color}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner /> : icon || null}
      {loading && textLoading ? textLoading : children}
    </StyledButton>
  )
}
