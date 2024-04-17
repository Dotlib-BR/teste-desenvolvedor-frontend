
import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Card } from "../Card/Card";

import { Loaders } from "../../helpers/Loaders";
import { Cards } from "../../model/card";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import './Medicine.scss';

export const Medicine = () => {
  const {
    data,
    getData,
    prevPage,
    nextPage,
    currentPage,
    searched_data,
    indexOfLastItem,
    dataForPagination
  } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {searched_data || data ? (
        <>
          <section>
            {(!searched_data ? dataForPagination : searched_data)?.map((data: Cards) => (
              <Card
                key={data.id}
                id={data.id}
                name={data.name}
                company={data.company}
                published_at={data.published_at}
              />
            ))}
          </section>
          <div className="pagination">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}>
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextPage}
              disabled={!data || indexOfLastItem >= data.length}>
              <IoIosArrowForward />
            </button>
          </div>
        </>
      ) : (
        <Loaders />
      )}
    </>
  )
}