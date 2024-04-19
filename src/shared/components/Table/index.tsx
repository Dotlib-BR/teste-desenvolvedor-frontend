import './Table.css';

interface TableProps {
    children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
    return (
        <table className="mainTable">
            <thead className="tableHeader">
                <tr className="tableHeaderLine">
                    <th scope="col" className="borderOne">
                        Medicamento
                    </th>
                    <th scope="col">Empresa</th>
                    <th scope="col"> Bula do profissional</th>
                    <th scope="col">Bula do paciente</th>
                    <th scope="col" className="borderTwo">
                        Publicação
                    </th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
