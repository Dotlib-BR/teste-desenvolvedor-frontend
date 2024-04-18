import React, { useCallback, useMemo } from 'react'

import horizontalLogo from '@/assets/horizintal-logo.svg'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { z } from 'zod'

import { Content, FlexSection, Header, HomeContainer } from './styles'

import { Button, Form, Table } from '@/components'

const formSchema = z.object({
  name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

type FormSchema = z.infer<typeof formSchema>

export const Home: React.FC = () => {
  const handleSubmit = useCallback((data: FormSchema) => {
    console.log(data)
  }, [])

  const tableHeader = useMemo(() => {
    return [
      {
        id: 'name',
        title: 'Nome',
      },
      {
        id: 'published_at',
        title: 'Publicado em',
      },
      {
        id: 'company',
        title: 'Empresa',
      },
      {
        id: 'documents',
        title: 'Documentos',
      },
      {
        id: 'actives_principles',
        title: 'Princípios Ativos',
      },
    ]
  }, [])

  const tableBody = useMemo(() => {
    return [
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: <input type="radio" />,
        actives_principles: <span>Hello</span>,
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
      {
        name: 'Test',
        published_at: 'Test',
        company: 'Test',
        documents: 'Test',
        actives_principles: 'Test',
      },
    ]
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
        <Table header={tableHeader} body={tableBody} />
      </Content>
    </HomeContainer>
  )
}
