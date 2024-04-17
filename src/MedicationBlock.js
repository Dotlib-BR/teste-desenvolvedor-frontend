

function MedicationBlock({med}){
    return <li key={med.id}>
            <h2>
                {med.name}
            </h2>
            <span>
                Laboratório: {med.company}
            </span>
        </li>
}

export default MedicationBlock;