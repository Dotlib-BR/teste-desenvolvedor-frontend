/* eslint-disable @typescript-eslint/no-explicit-any */
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
  import { useState } from 'react';
  
  export const TableMedicine = ({ medicines }: any) => {
      const [expanded, setExpanded] = useState(false);
  
    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  
    return (
      <>
        <Accordion
          expanded={false}
          sx={{ background: '#005090', color: 'write', fontWeight: '700' }}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography
              sx={{
                width: '33%',
                flexShrink: 0,
                color: 'white',
                fontWeight: '700',
              }}
            >
              Medicamento
            </Typography>
            <Typography
              sx={{
                width: '33%',
                flexShrink: 0,
                color: 'white',
                fontWeight: '700',
              }}
            >
              Laboratório
            </Typography>
            <Box alignItems="center" display="flex" justifyContent="center">
              <Typography marginRight="5px" sx={{ color: 'white', fontWeight: '700' }}>
                Data de publicação
              </Typography>
            </Box>
          </AccordionSummary>
        </Accordion>
        {medicines
          .map((item: any) => (
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
                  <Item title={'Principio Ativo'} text={item.active_principles[0].name} isLine />
                </Box>
              </AccordionDetails>
              <AccordionActions>
              </AccordionActions>
            </Accordion>
          ))}
      </>
    );
  };
  
  const Item = ({ title, text, isLine = false }: { title: string; text: string; isLine?: boolean }) => {
    return (
      <Box display={isLine ? 'flex' : undefined}>
        <Typography fontWeight="700"> {title}:</Typography>
        <Typography marginLeft="10px">{text}</Typography>
      </Box>
    );
  };
  