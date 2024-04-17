import { ExternalLink } from "lucide-react";
import { activePrinciplesProps, documentProps, leafletProps } from "../utils/types";
import dayjs from 'dayjs';

import 'dayjs/locale/pt-br'
import '../styles/components/leaflet.sass';
import { generatePDF } from "../utils/generatePDF";

dayjs.locale('pt-br')

export function Leaflet(item: leafletProps) {
  const date = dayjs(item.published_at.split('T')[0]).format('DD/MM/YYYY')

  return (
    <div className='leaflet'>
      <h2>{item.name}</h2>
      <p>{date}</p>
      <p>{item.company}</p>

      <ul>
        {
          item.documents.map((doc: documentProps) => {
            return (
              <li key={doc.id}>
                <a href="" title={doc.type} target='_blank' rel='noreferrer' onClick={() => generatePDF(item, doc.type)}>{doc.expedient}</a>
                <ExternalLink size={16} />
              </li>
            )
          })
        }
      </ul>

      <ul>
        {
          item.active_principles.map((principle: activePrinciplesProps) => {
            return (
              <li key={principle.id}>{principle.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}