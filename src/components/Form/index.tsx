import React, { FormHTMLAttributes } from 'react'

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './components/Input'

type FormData<T extends ZodSchema> =
  T extends ZodSchema<infer Data> ? Data : never

interface FormProps<T extends ZodSchema>
  extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  formSchema: T
  onSubmitForm: SubmitHandler<FormData<T>>
}

export const Form = <T extends ZodSchema>({
  children,
  formSchema,
  onSubmitForm,
}: FormProps<T>) => {
  const methods = useForm<FormData<T>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    methods.handleSubmit(async (data) => {
      await onSubmitForm(data)
    })(event)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormProvider>
  )
}

Form.Input = Input
