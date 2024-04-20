import React from 'react';
import { Modal, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { formatDate } from '../utils/dateUtils';
import { MedicineData } from '../types/medicineTypes';
import '../styles/modal.scss';

interface MedicineModalProps {
  isOpen: boolean; // Propriedade que indica se o modal está aberto.
  onClose: () => void; // Função para fechar o modal.
  medicine: MedicineData | null; // Dados do medicamento a serem exibidos no modal.
}

const MedicineModal: React.FC<MedicineModalProps> = ({ isOpen, onClose, medicine }) => {
  // Verifica se o modal deve ser exibido ou não
  if (!isOpen || !medicine) {
    return null; // Retorna null se o modal não estiver aberto ou se não houver dados do medicamento.
  }

  return (
    <Modal open={isOpen} onClose={onClose} style={{ zIndex: 1500 }}>
      <div className="modal-container">
        <div className="modal-content">
          <Typography variant="h5" gutterBottom>
            Informações do Medicamento
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Identificador:</strong> {medicine.id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nome:</strong> {medicine.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Publicado em:</strong> {formatDate(medicine.published_at)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Empresa:</strong> {medicine.company}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Bulas
          </Typography>
          <List>
            {medicine.documents.map((doc) => (
              <ListItem key={doc.id}>
                <ListItemText
                  primary={`Tipo: ${doc.type.toLowerCase() === "patient" ?
                    "Paciente" :
                    doc.type.toLowerCase() === "professional" ?
                      "Profissional" :
                      doc.type.charAt(0).toUpperCase() + doc.type.slice(1)
                    }` // Traduz o tipo do documento para português.
                  }
                  secondary={`Registro: ${doc.expedient}, Identificador: ${doc.id}
                  `}
                  style={{ cursor: 'pointer' }}
                />
                {/* Botão para abrir a bula em uma nova aba */}
                <Button variant="outlined"
                  onClick={() => window.open(doc.url, '_blank')} style={{ marginRight: 8 }}>
                  Abrir Bula
                </Button>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom>
            Princípios Ativos
          </Typography>
          <List>
            {medicine.active_principles.map((principle) => (
              <ListItem key={principle.id}>
                <ListItemText primary={principle.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Modal>
  );
};

export default MedicineModal;
