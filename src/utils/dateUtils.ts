export function formatDate(dateString: string): string {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

export function formatDateCell(cell: any) {
    let value = cell.getValue();
    return formatDate(value)
}
