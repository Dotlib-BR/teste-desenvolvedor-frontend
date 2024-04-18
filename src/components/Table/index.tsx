import React from 'react'
import { StyledTable } from './styles'

type HeaderItemSchema = {
  id: string
  title: string
}

type BodyItemSchema = {
  [key: string]: any
}

type TableProps = {
  header: HeaderItemSchema[]
  body: BodyItemSchema[]
}

export const Table: React.FC<TableProps> = ({ header, body }) => {
  const render = (value: any) => {
    if (!value.attributes) return value

    return value.value
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {header.map((item) => {
            return <th key={item.id}>{item.title}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => {
          return (
            <tr key={index}>
              {Object.keys(item).map((key, idx) => (
                <td key={index + idx}>{render(item[key])}</td>
              ))}
            </tr>
          )
        }) || null}
      </tbody>
    </StyledTable>
  )
}
