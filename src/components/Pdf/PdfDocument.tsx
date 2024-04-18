
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

// gerando um html para o pdf com os dados do medicamento
const MedicineDetailsPDF = ({ details }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>Detalhes do Medicamento</Text>
      <Text style={styles.section}>Medicamento: {details.name}</Text>
      <Text style={styles.section}>Empresa: {details.company}</Text>
      <Text style={styles.section}>
        Data de Publicação: {moment(details.published_at).format('DD/MM/YYYY')}
      </Text>
      <Text style={styles.section}>Princípios Ativos:</Text>
      {details.active_principles?.map((principle: any, index: any) => (
        <Text key={index} style={styles.section}>{principle.name}</Text>
      ))}
    </Page>
  </Document>
);

export default MedicineDetailsPDF;
