import IconsArrow from '../../icons/Arrow/IconArrow';
import './Table.css';

interface TableProps {
    dateFilter: string;
    setDateFilter: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
}

export default function Table({
    dateFilter,
    setDateFilter,
    children,
}: TableProps) {
    const handleDate = () => {
        if (dateFilter === 'asc') {
            setDateFilter('desc');
        } else {
            setDateFilter('asc');
        }
    };
    return (
        <table className="mainTable">
            <thead className="tableHeader">
                <tr className="tableHeaderLine">
                    <th scope="col" className="borderOne">
                        Medicamento
                    </th>
                    <th scope="col" className="columCompany">
                        Empresa
                    </th>
                    <th scope="col" className="columleaflet">
                        {' '}
                        Bula do profissional
                    </th>
                    <th scope="col" className="columleaflet">
                        Bula do paciente
                    </th>
                    <th
                        scope="col"
                        className="borderTwo columData"
                        onClick={() => handleDate()}
                    >
                        Publicação{' '}
                        {dateFilter === 'asc' ? (
                            <IconsArrow name="arrowDown" />
                        ) : (
                            <IconsArrow name="arrowUp" />
                        )}
                    </th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
