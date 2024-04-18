//Styles
import { Table, Header, Row, THeader, TBody, TData } from "./list.styles";

//Context
import { useGlobalContext } from "../../context/context";

function List() {
  const { state } = useGlobalContext();

  return (
    <Table>
      <Header>
        <THeader>Remédio</THeader>
        <THeader>Publicação</THeader>
      </Header>
      <TBody>
        {state.listData.map((data: any) => (
          <Row>
            <TData>{data.name}</TData>
            <TData>{data.published_at}</TData>
          </Row>
        ))}
      </TBody>
    </Table>
  );
}

export default List;
