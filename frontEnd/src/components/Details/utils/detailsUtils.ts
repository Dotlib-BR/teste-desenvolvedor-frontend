export const handleDocumentText = (document: string | undefined) => {
    if(!document) return ''
    else if(document == 'PROFESSIONAL') return 'Documentação do profissional'
    else if(document == 'PATIENT') return 'Documentação do paciente'
    else return ''
}