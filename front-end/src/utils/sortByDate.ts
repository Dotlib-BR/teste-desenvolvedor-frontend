
type DateType = {
    published_at: string | Date
}

export const sortByDate = (date1: DateType, date2: DateType) => {
    return  new Date(date1?.published_at).getTime() - new Date(date2?.published_at).getTime()
}