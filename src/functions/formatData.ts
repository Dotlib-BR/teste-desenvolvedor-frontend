export const formatData = {
  name(value: string) {
    const words = value.split(' ')

    const formattedName = words.map((word) => {
      if (word === 'S/A' || word === 'S.A') {
        return word
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }).join(' ')

    return formattedName
  },

  date(value: string) {
    const date = new Date(value)

    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    return formattedDate
  }
}