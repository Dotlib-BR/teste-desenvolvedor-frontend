import React from 'react'

// styles
import { 
    CardStyled, 
    FlexDiv, 
    Info, 
    Label, 
    MedicineInfo, 
    MedicineName } from './card_styled';

// icons
import { MdOutlineScience, MdDateRange } from "react-icons/md";
import { CgPill } from "react-icons/cg";
import { FaFilePdf } from "react-icons/fa6";
import { IMedicine } from '@/interfaces/medicine';


const Card = (props: { medicine: IMedicine }) => {
  const greenColor = "#0FE3AF";
  const { medicine } = props as { medicine: IMedicine }; 

  async function downloadPDF(url: string, fileName: string) {
    try {
    
      const pdfUrl = url;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank"; 
      link.download =  fileName + "document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
    } catch (error) {
      console.error('Erro ao fazer o download do PDF:', error);
    }
  }
  

  return (
    <CardStyled>
      <MedicineName>
        {medicine.name}
      </MedicineName>

    <Info>

    <MedicineInfo>
          <div>
            <MdDateRange color={greenColor} size={25} />
          </div>

          <FlexDiv>
            <Label>Data de publicação:</Label>
            {new Date(medicine.published_at).toLocaleDateString()}
          </FlexDiv>
      </MedicineInfo>

      <MedicineInfo>
          <div>
            <MdOutlineScience color={greenColor} size={25} />
          </div>

          <FlexDiv>
          <Label>Laboratório:</Label>
          {medicine.company}
          </FlexDiv>

      </MedicineInfo>

      <MedicineInfo>
          <div>
            <CgPill color={greenColor} size={25} />
          </div>
          <FlexDiv>
            <Label> Príncipios ativos: </Label>
            {medicine.active_principles.map((principle) => (
                <p key={principle.id}>{principle.name}</p>
            ))}
          </FlexDiv>
      </MedicineInfo>

      <MedicineInfo>
          <div>
            <FaFilePdf color={greenColor} size={25} />
          </div>
          <FlexDiv>
            <a onClick={() => downloadPDF(medicine.documents[0].url, 'professional')}>Profissional</a>
            <a onClick={() => downloadPDF(medicine.documents[1].url, 'patient')}>Paciente</a>
          </FlexDiv>
      </MedicineInfo>

    </Info>


    </CardStyled>
  )
}

export default Card