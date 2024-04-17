import React from 'react'
import { Documents } from '../../../Context/DataContext'
import IconPdf from '../../../assets/IconPdf';


const styleTD: React.CSSProperties = {
  cursor: "pointer"
}

const Leaflet = ({data}: {data: Documents[]}) => {

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
      {normalizeLeaflet().map((doc)=> 
        <td key={doc.id}>
          <a style={styleTD} href={doc.url} target='_blank' download><IconPdf/></a>
        </td>
      )}
    </>

  )
}

export default Leaflet;