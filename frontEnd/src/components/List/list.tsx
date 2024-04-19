//Styles
import { Table, Header, Row, THeader, TBody, TData } from "./list.styles";

//Context
import { useGlobalContext } from "../../context/context";

//Utils
import { formatToPtBrDate } from "../../utils/utils";

//Types
import { IMedicineData } from "../../types";

function List() {
  const { state } = useGlobalContext();

  // const handleList = (data: IMedicineData[]) => {
  //   if(!data){
  //     return (
  //       <div>não tem, mano</div>
  //     ) 
  //   } else {
  //     return (
        
  //     )
  //   }
  // } 

  return (
    <Table>
      <Header>
        <Row header>
          <THeader>Remédio</THeader>
          <THeader>Publicação</THeader>
        </Row>
      </Header> 
      <TBody>
        {state.listData.map((data: IMedicineData) => (
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
