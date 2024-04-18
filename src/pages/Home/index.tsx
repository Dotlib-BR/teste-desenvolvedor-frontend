import React, { useCallback, useMemo } from 'react'

import horizontalLogo from '@/assets/horizintal-logo.svg'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { z } from 'zod'

import { Content, FlexSection, Header, HomeContainer } from './styles'

import { Button, Form, Pagination, Table } from '@/components'
import { format } from 'date-fns'
import { useMedication } from '@/modules/useMedication/useMedication'

const formSchema = z.object({
  name: z.string(),
  company: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export const Home: React.FC = () => {
  const { response, isLoading, getMedications } = useMedication()

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
    if (response.data) {
      return response.data.map((medication) => {
        return {
          name: medication.name,
          published_at: format(medication.published_at, 'dd/MM/yyyy'),
          company: medication.company,
          documents: 'Test',
          actives_principles: 'Test',
        }
      })
    }

    return []
  }, [response])

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
          <Form.Input
            name="company"
            label="Buscar por Empresa:"
            placeholder="Multilab "
          />
          <Button
            icon={<MagnifyingGlass />}
            loading={isLoading}
            textLoading="Buscando..."
          >
            Buscar
          </Button>
        </Form>
      </FlexSection>
      <Content>
        <Table header={tableHeader} body={tableBody} />
        <Pagination
          pages={response.pages}
          first={response.first}
          last={response.last}
          next={response.next}
          prev={response.prev}
          handleGetNewData={getMedications}
        />
      </Content>
    </HomeContainer>
  )
}
