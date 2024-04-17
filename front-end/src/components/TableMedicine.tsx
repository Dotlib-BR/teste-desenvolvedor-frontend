import { SyntheticEvent, useState } from 'react';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Link,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { sortByDate } from '../utils/sortByDate';
import { Title } from './Title';
import { Document, Medicine } from '../Types/medicine';
import { formatDate } from '../utils/formatDate';

type TableMedicineProps = {
  medicines: Medicine[],
  isMobile?: boolean
}

type ItemProps = {
  title: string; 
  text?: string; 
  isLine?: boolean,
  isMobile?: boolean,
  documents?: Document[]
}
  
export const TableMedicine = ({ medicines, isMobile }: TableMedicineProps) => {
  const [expanded, setExpanded] = useState('');
  
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
  };
  
  
    return (
      <>
        { !isMobile && <Accordion
          expanded={false}
          sx={{ background: '#005090' }}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Title text="Medicamento"/>
            <Title text="Laboratório"/>
            <Title text="Data de publicação"/>
          </AccordionSummary>
        </Accordion>}
        {medicines
          .sort(sortByDate)
          .map((item: Medicine) => (
            <Accordion expanded={expanded === item.id} key={item.id} onChange={handleChange(item.id)}>
              <AccordionSummary sx={{overflowY: 'hidden'}} aria-controls="panel1bh-content" expandIcon={<ExpandMoreIcon />} id="panel1bh-header">
                
              {
                isMobile ? 
                  <Box display='flex' flexDirection="column">
                  <Item title={'Medicamento'} text={item.name} isLine isMobile />
                  <Item title={'Laboratório'} text={item.company} isLine isMobile />
                  <Item title={'Data'} text={ formatDate(item.published_at)} isLine isMobile />
                  </Box>
                :
                <>
                  <Typography width='33%' overflow='hidden'>{item.name}</Typography>
                <Typography width='33%' marginX='5px' overflow='hidden'>{item.company}</Typography>
                <Typography>{formatDate(item.published_at)}</Typography>
                </>
              }
                
              </AccordionSummary>
              <AccordionDetails>
                <Divider sx={{ marginY: '1rem' }} />
  
                <Box borderRadius="5px" padding={1} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px">
                  <Typography minWidth="100%" textAlign="center">
                    Informações Adicionais
                  </Typography>
                  <Item title={'Principio Ativo'} text={item.active_principles.map((item) => item.name).join(", ")} isLine />
                  <Item title={'Documents'} documents={item.documents} isLine />
                  
                </Box>
              </AccordionDetails>
              <AccordionActions>
              </AccordionActions>
            </Accordion>
          ))}
      </>
    );
  };
  
  const Item = ({ title, text = '', isLine = false, documents, isMobile = false  }: ItemProps) => {

    return (
      <Box display={isLine ? 'flex' : undefined} alignItems='center'>
        <Typography fontWeight={ isMobile ? "400" :"700" }> {title}:</Typography>
        
        {
          documents ? documents.map((item) => <Link href={item.url} target="_blank" marginX={1}>{item.type}</Link>) :
          <Typography marginLeft="10px" fontSize={isMobile ? '12px' : '14px'}>{text}</Typography>
        }
      </Box>
    );
  };  