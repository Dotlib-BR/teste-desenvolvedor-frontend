//Types
import { IMedicineData } from "../../../types";

//Styles
import { NotFound, Row, TData } from "../list.styles";

//Utils
import { formatToPtBrDate } from "../../../utils/utils";

export const handleList = (data: IMedicineData[]) => {
    if (!data.length) {
      return <NotFound>Nome não encontrado :(</NotFound>;
    } else {
      return data.map((data: IMedicineData) => (
        <Row key={data.id}>
          <TData>
            <h4>{data.name}</h4>
            <p>{data.company}</p>
          </TData>
          <TData>{formatToPtBrDate(data.published_at)}</TData>
        </Row>
      ));
    }
  };