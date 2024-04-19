import { formatDate } from '../../utils/format-date'
import { handleDownload } from '../../utils/download-pdf'
import { SelectedMedicineData } from '../../interface/selected-medicine-prop'

import s from './style.module.sass'

export default function MedicineDetails({
    data,
    className,
}: SelectedMedicineData) {
    return (
        <div className={className ? s.medicineQuery : s.medicineItem}>
            <div className={s.brandInfo}>
                <figure className={s.brandImageContainer}>
                    <img
                        src={data.company_image}
                        alt={`Foto de ${data.company_image}`}
                        className={s.brandImage}
                    />
                </figure>
                <h2 className={s.brandName}>{data.company}</h2>
            </div>

            <div className={s.medicineDetails}>
                <h2 className={s.medicineDetailsName}>{data.name}</h2>
                <div className={s.medicineDetail}>
                    <figure className={s.medicineImageBox}>
                        <img
                            src={data.medical_image}
                            alt={`Foto de ${data.medical_image}`}
                            className={s.medicineImage}
                        />
                    </figure>

                    <div className={s.detailsContent}>
                        <span>
                            <h3 className={s.detailTitle}>Princípio ativo:</h3>

                            <ul className={s.detailText}>
                                {data.active_principles.map(principle => (
                                    <li key={principle.id}>{principle.name}</li>
                                ))}
                            </ul>
                        </span>

                        <span>
                            <h3 className={s.detailTitle}>Publicado em:</h3>
                            <p className={s.publishedDate}>
                                {formatDate(data.published_at)}
                            </p>
                        </span>
                    </div>
                </div>

                <div className={s.buttonsContainer}>
                    <button
                        className={s.userLeafletButton}
                        onClick={() => handleDownload(data, 'PATIENT')}
                    >
                        Bula Usuário
                    </button>
                    <button
                        className={s.professionalLeafletButton}
                        onClick={() => handleDownload(data, 'PROFESSIONAL')}
                    >
                        Bula Profissional
                    </button>
                </div>
            </div>
        </div>
    )
}
