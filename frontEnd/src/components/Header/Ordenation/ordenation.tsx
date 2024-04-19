//Styles
import { Select, Option } from "./ordenation.styles";

//Utils
import { orderByPublishedAt } from "../../../utils/utils";

//Context
import { useGlobalContext } from "../../../context/context";

function Ordenation() {
  const { state, setState } = useGlobalContext();

  const handleOrder = (order: string) => {
    setState((prevState) => ({
      ...prevState,
      listData: orderByPublishedAt(state.listData, order),
    }));
  };

  return (
    <Select name="select" onChange={(e) => handleOrder(e.target.value)}>
      <Option value="" disabled defaultValue="">
        Selecione uma opção
      </Option>
      <Option value="oldest">Mais antigo</Option>
      <Option value="latest">Mais recente</Option>
    </Select>
  );
}

export default Ordenation;
