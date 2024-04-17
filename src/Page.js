import MedicationBlock from './MedicationBlock.js'

function Page(props){
    const {meds} = props
    return <ul>
        {
            meds.map(med => <MedicationBlock med={med} key={med.id}/>)
        }
    </ul>
}

export default Page