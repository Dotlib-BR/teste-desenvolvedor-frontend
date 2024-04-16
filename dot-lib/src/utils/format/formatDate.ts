interface FormatDateProps {
  date: string
  hours?: boolean
}

export function formatDate({ date, hours }: FormatDateProps): string {
  const createdDate = new Date(date)

  const day = String(createdDate.getDate()).padStart(2, '0')
  const month = String(createdDate.getMonth() + 1).padStart(2, '0')
  const year = createdDate.getFullYear()
  const hour = String(createdDate.getHours()).padStart(2, '0')
  const minute = String(createdDate.getMinutes()).padStart(2, '0')

  const formattedDate = `${day}/${month}/${year}`

  if (hours) {
    const formattedHour = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    return `${formattedDate} às ${formattedHour}`
  }

  return formattedDate
}
