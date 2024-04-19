//Styles
import { Table, Header, Row, THeader, TBody } from "./list.styles";

//Context
import { useGlobalContext } from "../../context/context";

//Utils
import { handleList } from "./utils/listUtils";


function List() {
  const { state } = useGlobalContext();

  return (
    <Table>
      <Header>
        <Row header>
          <THeader>Remédio</THeader>
          <THeader>Publicação</THeader>
        </Row>
      </Header>
      <TBody>
        {handleList(state.listData)}
      </TBody>
    </Table>
  );
}

export default List;
