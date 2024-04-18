import { Body } from "./medicineStyle"

export default function Medicine(){
  return(
    <Body>
      <div>
        <span className="description">Remédio: </span> <span>AMOXILINA</span>
      </div>
      <div>
        <span className="description">Laboratório: </span> <span>ULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA</span>
      </div>
      <div>
        <span className="description">Data de publicação:</span> <span>16/12/2022</span>
      </div>
    </Body>
  )
}