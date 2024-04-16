import React from 'react'
import { CardStyled, FlexDiv, Info, Label, MedicineInfo, MedicineName } from './card_styled'
import { MdOutlineScience, MdDateRange } from "react-icons/md";
import { CgPill } from "react-icons/cg";
import { FaFilePdf } from "react-icons/fa6";

const Card = () => {
  const greenColor = "#0FE3AF"
  return (
    <CardStyled>
      <MedicineName>
        ALPRAZOLAM
      </MedicineName>

    <Info>

    <MedicineInfo>
          <div>
            <MdDateRange color={greenColor} size={25} />
          </div>

          <FlexDiv>
            <Label>Data de publicação:</Label>
            22/11/2022
          </FlexDiv>
      </MedicineInfo>

      <MedicineInfo>
          <div>
            <MdOutlineScience color={greenColor} size={25} />
          </div>

          <FlexDiv>
          <Label>Laboratório:</Label>
          CRISTÁLIA PRODUTOS QUÍMICOS FARMACÊUTICOS LTDA.
          </FlexDiv>

      </MedicineInfo>

      <MedicineInfo>
          <div>
            <CgPill color={greenColor} size={25} />
          </div>
          <FlexDiv>
            <Label> Príncipios ativos: </Label>
            <p>CANDESARTANA CILEXETILA</p>
            <p>INSULINA DETEMIR</p>
          </FlexDiv>
      </MedicineInfo>

      <MedicineInfo>
          <div>
            <FaFilePdf color={greenColor} size={25} />
          </div>
          <FlexDiv>
          <a>Profissional</a>
          <a>Paciente</a>
          </FlexDiv>
      </MedicineInfo>

    </Info>


    </CardStyled>
  )
}

export default Card