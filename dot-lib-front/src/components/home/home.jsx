import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Body } from "./homeStyle";
import logo from "../../assets/dotlib_logo.png";
import Medicine from "../medicine/medicine";
import { sortFromNewToOld, sortFromOldToNew } from "../../utils/dataOrganizer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [oldToNew, setOldToNew] = useState([]);
  const [newToOld, setNewToOld] = useState([]);
  const [isTheOldItemFilterActive, setIsTheOldItemFilterActive] =
    useState(false);

  useEffect(() => {
    const LINK_API = "http://localhost:3000/data";
    const request = axios.get(LINK_API);
    request.then((response) => {
      setNewToOld(sortFromNewToOld(response.data));
      setOldToNew(sortFromOldToNew(response.data));
      setIsLoading(false);
    });
    request.catch((err) => {
      console.log(err.response);
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="DotLib logo" />
      </Header>

      <Body>
        {isLoading && <p>Carregando...</p>}

        {newToOld &&
          !isTheOldItemFilterActive &&
          newToOld.map(({ id, name, company, published_at }) => (
            <Medicine
              key={id}
              name={name}
              company={company}
              published_at={published_at}
            />
          ))}

        {oldToNew &&
          isTheOldItemFilterActive &&
          oldToNew.map(({ id, name, company, published_at }) => (
            <Medicine
              key={id}
              name={name}
              company={company}
              published_at={published_at}
            />
          ))}
      </Body>
    </>
  );
}
