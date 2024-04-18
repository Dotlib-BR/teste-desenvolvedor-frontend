import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Card } from "../Card/Card";
import { Loaders } from "../../helpers/Loaders";
import './Medicine.scss';
import { Cards } from "../../model/card";
import Pagination from "../Pagination/Pagination";

export const Medicine = () => {
  const {
    data,
    getData,
    prevPage,
    nextPage,
    currentPage,
    searched_data,
    indexOfLastItem,
    dataForPagination,
    searched_value,
  } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  const renderCards = (cards?: Cards) => (
    <section>
      {cards?.map((data: Cards) => (
        <Card
          key={data.id}
          id={data.id}
          name={data.name}
          company={data.company}
          published_at={data.published_at}
        />
      ))}
    </section>
  );

  return (
    <>
      {searched_value?.length > 2 ? (
        <>
          {searched_data && searched_data.length === 0 ? <b>informações não encontradas.</b> : renderCards(searched_data)}
        </>
      ) : (
        <>
          {dataForPagination ? (
            <>
              {renderCards(dataForPagination)}
              <Pagination
                currentPage={currentPage}
                prevPage={prevPage}
                nextPage={nextPage}
                disabledPrev={currentPage === 1}
                disabledNext={!data || indexOfLastItem >= data.length}
              />
            </>
          ) : (
            <Loaders />
          )}
        </>
      )}
    </>
  )
}
