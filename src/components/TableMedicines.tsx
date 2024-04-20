import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { ReactTabulator, ColumnDefinition } from 'react-tabulator';
import axios from 'axios';
import { formatDateCell } from '../utils/dateUtils';
import { MedicineData } from '../types/medicineTypes';
import MedicineModal from '../components/MedicineModal';
import 'react-tabulator/css/materialize/tabulator_materialize.min.css'

function TableMedicines() {
    const [tableData, setTableData] = useState<MedicineData[]>([]); // Estado para armazenar todos os dados dos medicamentos.
    const [filteredData, setFilteredData] = useState<MedicineData[]>([]); // Estado para armazenar os dados filtrados.
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para armazenar o termo de busca.
    const [selectedMedicine, setSelectedMedicine] = useState<MedicineData | null>(null); // Estado para armazenar o medicamento selecionado.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<MedicineData[]>('http://localhost:3000/data');
                setFilteredData(response.data); // Define os dados filtrados inicialmente como os dados da API.
                setTableData(response.data); // Define todos os dados dos medicamentos.
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []); // Executa apenas uma vez ao montar o componente.

    // Definição das colunas para a tabela.
    const columns: ColumnDefinition[] = [
        { title: "ID", field: "id", visible: false },
        { title: "Nome", field: "name" },
        {
            title: "Publicado em",
            field: "published_at",
            formatter: formatDateCell, // Formata a data usando a função formatDateCell
            responsive: 1,
        },
        { title: "Laboratório", field: "company" },

    ];

    const handleRowClick = (e: any, row: any) => {
        console.log("Teste");
        const rowData = row.getData();
        setSelectedMedicine(rowData); // Define o medicamento selecionado.
    };

    const handleCloseModal = () => {
        setSelectedMedicine(null); // Define o medicamento selecionado como nulo para fechar o modal.
    };

    const options = {
        layout: "fitDataStretch",
        responsiveLayout: "collapse",
        addRowPos: "top",
        history: true,
        pagination: true,
        paginationSize: 10,
        movableColumns: true,
        resizableRows: true,
        initialSort: [{ column: "published_at", dir: "desc" }], // Ordena inicialmente por data de publicação
        langs: {
            // Definir traduções personalizadas para os botões de paginação
            "pt-br": {
                pagination: {
                    first: "Primeira",
                    last: "Última",
                    prev: "Anterior",
                    next: "Próxima",
                },
            },
        },
        locale: "pt-br",
        rowClick: handleRowClick, // Define a função handleRowClick para lidar com o clique em uma linha
    };

    // Função para lidar com a mudança no campo de busca.
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        // Filtra os dados com base no termo de busca.
        const newFilteredData = tableData.filter((item) =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.company.toLowerCase().includes(searchTerm)
        );

        // Atualiza os dados filtrados e o termo de busca.
        setFilteredData(newFilteredData);
        setSearchTerm(searchTerm);
    };

    return (
        <div className='table_container'>
            <h2>Tabela de Medicamentos</h2>
            <div style={{ margin: '10px' }}>
                <TextField
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    label="Buscar por Nome ou Laboratório"
                    variant="outlined"
                    fullWidth
                />
                {tableData.length > 0 ? (

                    <ReactTabulator
                        data={filteredData}
                        columns={columns}
                        options={options}
                        events={{
                            rowClick: handleRowClick
                        }}
                    />
                ) : (
                    <p>Carregando dados...</p>
                )}
            </div>
            <MedicineModal isOpen={!!selectedMedicine} onClose={handleCloseModal} medicine={selectedMedicine} />
        </div>
    );
}

export default TableMedicines;
