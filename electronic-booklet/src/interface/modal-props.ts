import { MouseEventHandler } from 'react'

export interface ModalProps {
    isOpen: boolean
    onClose: MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}
