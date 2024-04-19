import s from './style.module.sass'

export default function Loading() {
    return (
        <div className={s.loadingContainer}>
            <div className={s.loadingSpinner}></div>
        </div>
    )
}
