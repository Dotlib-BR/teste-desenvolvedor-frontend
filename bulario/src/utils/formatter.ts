import { format } from 'date-fns'

export function formatDate(data: string) {
  const dataFormatada = format(data, 'dd/MM/yyyy - HH:mm:ss')

  return dataFormatada
}
