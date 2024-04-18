export interface SelectedMedicine {
    id: string
    name: string
    published_at: string
    company: string
    active_principles: { id: string; name: string }[]
    documents: { type: string; url: string }[]
    medical_image: string
    company_image: string
}

export interface SelectedMedicineData {
    data: SelectedMedicine
}
