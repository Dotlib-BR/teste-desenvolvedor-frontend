
export const getNumberOfPages = (searchTerm: string, medicinesFiltered: number, pages: number) => {
    
    return searchTerm ?  Math.ceil(medicinesFiltered / 10) : pages
}