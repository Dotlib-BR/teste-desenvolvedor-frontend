import { ModalProps } from '../../interface/modal-props'

import s from './style.module.sass'

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <>
            {isOpen && (
                <div className={s.modal}>
                    <div className={s.modalContent}>
                        <button className={s.modalCloseBtn} onClick={onClose}>
                            X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
