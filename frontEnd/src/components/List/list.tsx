//Styles
import { Table, Header, Row, THeader, TBody, TData } from "./list.styles";

//Context
import { useGlobalContext } from "../../context/context";

//Utils
import { formatToPtBrDate } from "../../utils/utils";

function List() {
  const { state } = useGlobalContext();

  return (
    <Table>
      <Header>
        <Row>
          <THeader>Remédio</THeader>
          <THeader>Publicação</THeader>
        </Row>
      </Header>
      <TBody>
        {state.listData.map((data: any) => (
          <Row key={data.id}>
            <TData>{data.name}</TData>
            <TData>{formatToPtBrDate(data.published_at)}</TData>
          </Row>
        ))}
      </TBody>
    </Table>
  );
}

export default List;
