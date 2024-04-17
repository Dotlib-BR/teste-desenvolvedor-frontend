import './Table.css';

interface TableProps {
    children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
    return (
        <table className="mainTable">
            <thead className="tableHeader">
                <tr>
                    <th scope="col">Medicamento</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Publicação</th>
                    <th scope="col">Bula do paciente</th>
                    <th scope="col">Bula do profissional</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
