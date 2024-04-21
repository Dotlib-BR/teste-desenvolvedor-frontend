export const formatName = (value: string | undefined) => {
  if (!value) return 
  const words = value.split(' ')

  const formattedName = words.map((word) => {
    if (word === 'S/A' || word === 'S.A') {
      return word
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
  }).join(' ')

  return formattedName
}

export const formatDate = (value: string | undefined) => {
  if (!value) return 
  const date = new Date(value)

  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return formattedDate
}