
import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Card } from "../Card/Card";
import './Medicine.scss';
import { Loaders } from "../../helpers/Loaders";
import { Cards } from "../../model/card";

export const Medicine = () => {
  const { data, getData, searched_data } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {searched_data || data ? (
        <section>
          {(!searched_data ? data : searched_data)?.map((data: Cards) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              company={data.company}
              published_at={data.published_at}
            />
          ))}
        </section>
      ) : (
        <Loaders />
      )}
    </>
  );
  

  
  

}