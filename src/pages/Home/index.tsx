import React, { useCallback, useMemo, useState } from 'react'

import horizontalLogo from '@/assets/horizintal-logo.svg'

import {
  CaretDown,
  CaretUp,
  MagnifyingGlass,
  Stethoscope,
  User,
} from '@phosphor-icons/react'
import { z } from 'zod'
import { format } from 'date-fns'

import {
  Content,
  DropDownContent,
  FlexSection,
  Header,
  HomeContainer,
  OrderHeader,
} from './styles'

import { Button, Form, Pagination, Table } from '@/components'
import { DropDownItem } from './components/DropDownItem'

import { useMedication } from '@/modules/useMedication/useMedication'

const formSchema = z.object({
  name: z.string(),
  company: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export const Home: React.FC = () => {
  const { response, isLoading, getMedications, handleSetQueryParams } =
    useMedication()

  const [sortOrder, setSortOrder] = useState<'-' | null>()

  const handleSubmit = useCallback(
    (data: FormSchema) => {
      if (data.name.length > 0 && data.company.length > 0) {
        alert('Preencha apenas um campo para realiazr a pesquisa.')
        handleSetQueryParams({
          name: '',
          company: '',
        })
        getMedications()
        return
      }

      if (data.company.length === 0 && data.name.length === 0) {
        handleSetQueryParams({
          name: '',
          company: '',
          page: '_page=1',
          sort: '&_sort=-published_at',
        })
        getMedications()
      }

      if (data.name) {
        handleSetQueryParams({
          name: `&name=${data.name}`,
        })
        getMedications()
      }

      if (data.company) {
        handleSetQueryParams({
          company: `&company=${data.company}`,
        })
        getMedications()
      }
    },
    [getMedications, handleSetQueryParams],
  )

  const handleToggleSort = useCallback(() => {
    if (sortOrder) {
      handleSetQueryParams({
        sort: '&_sort=published_at',
      })
      setSortOrder(null)
      getMedications()
    }

    if (!sortOrder) {
      handleSetQueryParams({
        sort: '&_sort=-published_at',
      })
      setSortOrder('-')
      getMedications()
    }
  }, [getMedications, handleSetQueryParams, sortOrder])

  const tableHeader = useMemo(() => {
    return [
      {
        id: 'name',
        title: 'Nome',
      },
      {
        id: 'published_at',
        title: (
          <OrderHeader
            onClick={() => {
              handleToggleSort()
            }}
          >
            <span>Publicado em</span>
            {sortOrder !== '-' ? (
              <CaretUp size={16} />
            ) : (
              <CaretDown size={16} />
            )}
          </OrderHeader>
        ),
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
  }, [handleToggleSort, sortOrder])

  const tableBody = useMemo(() => {
    if (response.data) {
      return response.data.map((medication) => {
        return {
          name: medication.name,
          published_at: format(medication.published_at, 'dd/MM/yyyy'),
          company: medication.company,
          documents: (
            <DropDownItem
              buttonTitle="Ver Documentos"
              content={
                <DropDownContent>
                  {medication.documents.map((document) => {
                    return (
                      <Button
                        size="sm"
                        icon={
                          document.type === 'PROFESSIONAL' ? (
                            <Stethoscope />
                          ) : (
                            <User />
                          )
                        }
                        key={document.id}
                      >
                        {document.type}
                      </Button>
                    )
                  })}
                </DropDownContent>
              }
            />
          ),
          actives_principles: (
            <DropDownItem
              buttonTitle="Princípios Ativos"
              content={
                <DropDownContent>
                  {medication.active_principles.map((principle) => {
                    return <small key={principle.id}>{principle.name}</small>
                  })}
                </DropDownContent>
              }
            />
          ),
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
            type="submit"
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
        {response.pages > 1 ? (
          <Pagination
            pages={response.pages}
            first={response.first}
            last={response.last}
            next={response.next}
            prev={response.prev}
            handleSetQueryParams={handleSetQueryParams}
            handleGetNewData={getMedications}
          />
        ) : null}
      </Content>
    </HomeContainer>
  )
}
