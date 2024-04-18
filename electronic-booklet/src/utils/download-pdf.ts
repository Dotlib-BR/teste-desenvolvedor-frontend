import { SelectedMedicine } from '../interface/selected-medicine-prop'

export function handleDownload(data: SelectedMedicine, type: string) {
    const document = data.documents.find(doc => doc.type == type)
    if (document) {
        window.open(document.url)
    }
}
