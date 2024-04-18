//Styles
import { Select, Option } from "./ordenation.styles"

function Ordenation() {
  return (
    <Select name='select'>
        <Option value='' disabled selected hidden>Selecione uma opção</Option>
        <Option value='oldest'>Mais antigo</Option>
        <Option value='latest'>Mais recente</Option>
    </Select>
  )
}

export default Ordenation