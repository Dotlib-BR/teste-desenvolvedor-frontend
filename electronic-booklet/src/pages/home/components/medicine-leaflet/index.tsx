import MedicineDetails from '../../../../components/medicine-details'
import { CurrentItems } from '../../../../interface/current-items'
import { useApiContext } from '../../../../context/api-provider'
import Modal from '../../../../components/modal'

import s from './style.module.sass'

export default function MedicineLeaflet() {
    const {
        medicine,
        selectedMedicine,
        page,
        filter,
        isModalOpen,
        currentItems,
        indexOfLastItem,
        setFilter,
        nextPage,
        prevPage,
        renderPageNumbers,
        closeModal,
        handleSelectItem,
    } = useApiContext()

    return (
        <section className={s.container}>
            <div>
                <select
                    className={s.filterSelect}
                    name='filter'
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value='recent'>Mais recentes</option>
                    <option value='ancient'>Mais antigos</option>
                </select>

                <div className={s.containerMedicine}>
                    {currentItems.map((item: CurrentItems) => (
                        <div
                            className={`${s.medicineNameBox} ${
                                selectedMedicine?.id === item.id
                                    ? s.selectedMedicine
                                    : ''
                            }`}
                            onClick={() => handleSelectItem(item)}
                            key={item.id}
                        >
                            <figure className={s.brandImageContainer}>
                                <img
                                    src={item.company_image}
                                    alt='multilab'
                                    className={s.brandImage}
                                />
                            </figure>
                            <h2 className={s.medicineName}>{item.name}</h2>
                        </div>
                    ))}
                </div>

                <div className={s.pagination}>
                    <button
                        onClick={prevPage}
                        disabled={page === 1}
                        className={page === 1 ? s.disabledBtn : s.active}
                    >
                        Anterior
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={nextPage}
                        disabled={indexOfLastItem >= medicine.length}
                        className={
                            indexOfLastItem >= medicine.length
                                ? s.disabledBtn
                                : s.active
                        }
                    >
                        Próxima
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <MedicineDetails data={selectedMedicine!} />
            </Modal>

            <div className={s.details}>
                {selectedMedicine && (
                    <MedicineDetails data={selectedMedicine} />
                )}
            </div>
        </section>
    )
}
