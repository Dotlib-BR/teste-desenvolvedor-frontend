import React, { InputHTMLAttributes } from 'react'

import { useFormContext } from 'react-hook-form'

import { ErrorMessage, FlexArea, InputContent, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <InputContent>
      <FlexArea>
        {label ? <small>{label}</small> : null}
        {errors ? (
          <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
        ) : null}
      </FlexArea>
      <StyledInput {...register(name)} {...rest} />
    </InputContent>
  )
}
