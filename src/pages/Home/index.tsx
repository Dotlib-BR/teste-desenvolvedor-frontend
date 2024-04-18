import React, { useCallback } from 'react'

import horizontalLogo from '@/assets/horizintal-logo.svg'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { Content, FlexSection, Header, HomeContainer } from './styles'

import { Button, Form } from '@/components'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

type FormSchema = z.infer<typeof formSchema>

export const Home: React.FC = () => {
  const handleSubmit = useCallback((data: FormSchema) => {
    console.log(data)
  }, [])

  return (
    <HomeContainer>
      <Header>
        <img src={horizontalLogo} alt="" />
      </Header>
      <FlexSection>
        <Form formSchema={formSchema} onSubmitForm={handleSubmit}>
          <Form.Input
            name="name"
            label="Buscar por nome:"
            placeholder="Amoxicilina "
          />
          <Button icon={<MagnifyingGlass />}>Buscar</Button>
        </Form>
      </FlexSection>
      <Content>
        <span>Content</span>
      </Content>
    </HomeContainer>
  )
}
