import { Autocomplete, Box, Pagination, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { useManageData } from '../Providers/manageDataProvider';
import { TableMedicine } from '../components/TableMedicine';
import { getNumberOfPages } from '../utils/page';


export const Home = () =>{
    const [searchTerm, setSearchTerm] = useState<string>('');
    const {medicines, updateMedicines, pages} = useManageData();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const options = useMemo(() =>{
        const medicinesNames = medicines.map((medicine) => medicine.name)
        const companyNames = medicines.map((medicine) => medicine.company)
        return Array.from(new Set([...medicinesNames, ... companyNames]))
    }, [medicines] )

    const medicinesFiltered = useMemo(() => medicines.filter ((medicine) => {
        const exp = RegExp(searchTerm)
        return exp.test(medicine.name) || exp.test(medicine.company)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ),[searchTerm])

    return (
        <Box display="flex" flexDirection='column'  padding={ isMobile ? 2 : 6} >
        <Autocomplete
            disablePortal
            id="search"
            fullWidth
            options={options.sort()}
            renderInput={(params) => <TextField {...params} label="Pesquisar por nome do medicamento ou laboratório farmacêutico" />}
            size="small"
            onChange={(_event, value) => setSearchTerm(value || '')}
            sx={{ marginBottom: '20px'}}
        />
        <TableMedicine medicines={searchTerm ? medicinesFiltered : medicines} isMobile={isMobile}/>
        <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
            <Pagination count={ getNumberOfPages(searchTerm, medicinesFiltered.length, pages)} shape="rounded" onChange={(_event, page) => updateMedicines(page)} color='primary'/>
        </Box>
        </Box>  
    )
}