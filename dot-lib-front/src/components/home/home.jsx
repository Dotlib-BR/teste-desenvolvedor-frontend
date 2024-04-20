import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Body, Buttons } from "./homeStyle";
import logo from "../../assets/dotlib_logo.png";
import Medicine from "../medicine/medicine";
import Menu from "../menu/menu";
import { sortFromNewToOld, sortFromOldToNew } from "../../utils/dataOrganizer";
import pagination from "../../utils/pagination";
import Popup from "../popup/popup";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [oldToNew, setOldToNew] = useState([]);
  const [newToOld, setNewToOld] = useState([]);
  const [isTheOldItemFilterActive, setIsTheOldItemFilterActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchbarResult, setSearchbarResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isPopUpOpened, setIsPopupOpened] = useState(false);
  const [pdfUrl, setPdfUrl] = useState([]);

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

  const {
    paginatedDataNewToOld,
    paginatedDataOLdToNew,
    paginatedDataSearchResult,
    handlePreviousPage,
    handleNextPage,
  } = pagination(
    newToOld,
    oldToNew,
    searchbarResult,
    currentPage,
    10,
    setCurrentPage
  );

  return (
    <>
      <Header>
        <img src={logo} alt="DotLib logo" />
      </Header>

      

      <Menu
        isTheOldItemFilterActive={isTheOldItemFilterActive}
        setIsTheOldItemFilterActive={setIsTheOldItemFilterActive}
        oldToNew={oldToNew}
        newToOld={newToOld}
        setSearchbarResult={setSearchbarResult}
        setIsSearching={setIsSearching}
      ></Menu>

      <Body>
        {isLoading && <p>Carregando...</p>}

        {paginatedDataNewToOld &&
          !isTheOldItemFilterActive &&
          !isSearching &&
          paginatedDataNewToOld.map(
            ({
              id,
              name,
              company,
              published_at,
              active_principles,
              documents,
            }) => (
              <Medicine
                key={id}
                name={name}
                company={company}
                published_at={published_at}
                active_principles={active_principles.map(
                  (principle) => principle.name
                )}
                url={documents.map((doc) => doc.url)}
                setIsPopupOpened={setIsPopupOpened}
                setPdfUrl={setPdfUrl}
              />
            )
          )}

        {paginatedDataOLdToNew &&
          isTheOldItemFilterActive &&
          !isSearching &&
          paginatedDataOLdToNew.map(
            ({
              id,
              name,
              company,
              published_at,
              active_principles,
              documents,
              setIsPopupOpened,
            }) => (
              <Medicine
                key={id}
                name={name}
                company={company}
                published_at={published_at}
                active_principles={active_principles.map(
                  (principle) => principle.name
                )}
                url={documents.map((doc) => doc.url)}
                setIsPopupOpened={setIsPopupOpened}
                setPdfUrl={setPdfUrl}
              />
            )
          )}

        {paginatedDataSearchResult &&
          isSearching &&
          paginatedDataSearchResult.map(
            ({
              id,
              name,
              company,
              published_at,
              active_principles,
              documents,
              setIsPopupOpened,
            }) => (
              <Medicine
                key={id}
                name={name}
                company={company}
                published_at={published_at}
                active_principles={active_principles.map(
                  (principle) => principle.name
                )}
                url={documents.map((doc) => doc.url)}
                setIsPopupOpened={setIsPopupOpened}
                setPdfUrl={setPdfUrl}
              />
            )
          )}

        <Buttons>
          <button onClick={handlePreviousPage}>Anterior</button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage}>Próxima</button>
        </Buttons>

        {isPopUpOpened && <Popup pdfUrl={pdfUrl} setIsPopupOpened={setIsPopupOpened}></Popup>}
      </Body>
    </>
  );
}
