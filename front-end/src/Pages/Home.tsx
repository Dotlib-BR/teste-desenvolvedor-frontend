import { Autocomplete, Box, Pagination, TextField } from '@mui/material';
import { useMemo } from 'react';
import { useManageData } from '../Providers/manageDataProvider';
import { TableMedicine } from '../components/TableMedicine';


export const Home = () =>{

    const {medicines, updateMedicines, pages} = useManageData();

    const namesMedicines = useMemo(() =>{
        const values = medicines.map((medicine) => medicine.name)
        return Array.from(new Set(values))
    }, [medicines] )

    return (
        <Box display="flex" flexDirection='column'  padding={6} >
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            fullWidth
            options={namesMedicines}
            renderInput={(params) => <TextField {...params} label="Pesquisar remedios" />}
            size="small"
            sx={{ marginBottom: '20px'}}
        />
        <TableMedicine medicines={medicines}/>
        <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
            <Pagination count={pages} shape="rounded" onChange={(_event, page) => updateMedicines(page)}  />
        </Box>
        </Box>  
    )
}