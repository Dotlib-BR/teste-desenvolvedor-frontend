import React from 'react'
import { Documents } from '../../../Context/DataContext'
import IconPdf from '../../../assets/IconPdf';

const typesExpedient = {
  ["PATIENT"]: "Paciente",
  ["PROFESSIONAL"]: "Profissional",
}

const styleTD: React.CSSProperties = {
  cursor: "pointer"
}

const Leaflet = ({data, expedient}: {data: Documents[]; expedient?: boolean }) => {

  function normalizeLeaflet() {
    if(data[0].type === "PROFESSIONAL") {
      const getValue1 = data[0];
      data[0] = data[1];
      data[1] = getValue1;
      return data;
    }
    else {
      return data;
    }
  }

  return (
    <>
      {expedient ?
        normalizeLeaflet().map((doc)=> 
          <tr key={doc.id}>
            <th>Bula do {typesExpedient[doc.type]} (Expediente)</th>
            <td>{doc.expedient}</td>
          </tr>)
      :
      normalizeLeaflet().map((doc)=> 
        <td key={doc.id}>
          <a style={styleTD} href={doc.url} target='_blank' download><IconPdf/></a>
        </td>
        )
      }
    </>

  )
}

export default Leaflet;