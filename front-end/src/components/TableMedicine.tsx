import { SyntheticEvent, useState } from 'react';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { sortByDate } from '../utils/sortByDate';
import { Title } from './Title';
import { Medicine } from '../Types/medicine';

type TableMedicineProps = {
  medicines: Medicine[]
}

type ItemProps = {
  title: string; 
  text: string; 
  isLine?: boolean 
}
  
export const TableMedicine = ({ medicines }: TableMedicineProps) => {
  const [expanded, setExpanded] = useState('');
  
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
  };
  
  
    return (
      <>
        <Accordion
          expanded={false}
          sx={{ background: '#005090' }}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Title text="Medicamento"/>
            <Title text="Laboratório"/>
            <Title text="Data de publicação"/>
          </AccordionSummary>
        </Accordion>
        {medicines
          .sort(sortByDate)
          .map((item: Medicine) => (
            <Accordion expanded={expanded === item.id} key={item.id} onChange={handleChange(item.id)}>
              <AccordionSummary aria-controls="panel1bh-content" expandIcon={<ExpandMoreIcon />} id="panel1bh-header">
                <Typography sx={{ width: '33%' }}>{item.name}</Typography>
                <Typography sx={{ width: '33%', marginX: '5px'}}>{item.company}</Typography>
                <Typography>{new Date(item.published_at).toLocaleDateString('pt-BR')}</Typography>
           
              </AccordionSummary>
              <AccordionDetails>
                <Divider sx={{ marginY: '1rem' }} />
  
                <Box borderRadius="5px" padding={1} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px">
                  <Typography minWidth="100%" textAlign="center">
                    Informações Adicionais
                  </Typography>
                  <Item title={'Principio Ativo'} text={item.active_principles.map((item) => item.name).join(", ")} isLine />
                </Box>
              </AccordionDetails>
              <AccordionActions>
              </AccordionActions>
            </Accordion>
          ))}
      </>
    );
  };
  
  const Item = ({ title, text, isLine = false }: ItemProps) => {
    return (
      <Box display={isLine ? 'flex' : undefined}>
        <Typography fontWeight="700"> {title}:</Typography>
        <Typography marginLeft="10px">{text}</Typography>
      </Box>
    );
  };  