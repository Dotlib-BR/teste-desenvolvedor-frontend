import './Line.css';

interface LineProps {
    id: string;
    name: string;
    company: string;
    date: string;
    patient: string;
    professional: string;
}

export default function Line({
    id,
    name,
    company,
    date,
    patient,
    professional,
}: LineProps) {
    return (
        <tr className="tableLine" onClick={() => console.log(id)}>
            <td>{name}</td>
            <td>{company}</td>
            <td>{date}</td>
            <td>{patient}</td>
            <td>{professional}</td>
        </tr>
    );
}
