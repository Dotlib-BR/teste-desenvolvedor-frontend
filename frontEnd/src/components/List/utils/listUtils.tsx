//Types
import { IMedicineData } from "../../../types";

//Styles
import { NotFound, Row, TData } from "../list.styles";

//Utils
import { formatToPtBrDate } from "../../../utils/utils";

//Context
import { useGlobalContext } from "../../../context/context";

export const handleList = (data: IMedicineData[]) => {
  const { setState } = useGlobalContext();

  const handleDetailsData = (data: IMedicineData) => {
    setState((prevState) => ({
      ...prevState,
      showDetails: true,
      detailsData: data,
    }));
  };

  if (!data.length) {
    return (
      <Row>
        <TData>
          <NotFound>Nome não encontrado :(</NotFound>
        </TData>
      </Row>
    );
  } else {
    return data.map((data: IMedicineData) => (
      <Row key={data.id} onClick={() => handleDetailsData(data)}>
        <TData>
          <h4>{data.name}</h4>
          <p>{data.company}</p>
        </TData>
        <TData>{formatToPtBrDate(data.published_at)}</TData>
      </Row>
    ));
  }
};
