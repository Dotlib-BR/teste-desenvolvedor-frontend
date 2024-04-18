import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Body } from "./homeStyle";
import logo from "../../assets/dotlib_logo.png";
import Medicine from "../medicine/medicine";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const LINK_API = "http://localhost:3000/data";
    const request = axios.get(LINK_API);
    request.then((response) => {
      setData(response.data);
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
        {data &&
          data.map(({ id, name, company, published_at }) => (
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
