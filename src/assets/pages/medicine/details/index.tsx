import { useEffect, useState } from "react";

//libs
import { useParams } from "react-router-dom";

//types
import { Medicine } from "../../../../types";

//axios
import axios from "axios";

//components
import Layout from "../../../components/layout";
import Animation from "../../../components/animations/pills";

//style
import "./style.sass";

export default function Index() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<Medicine>();

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`).then((response) => {
      setMedicine(response.data);
      console.log(response.data);
    });
  }, [id]);

  return (
    <>
      <Layout>
        <main>
          <section className="medicine__details">
            <div className="medicine__details__content">
              <h1>Detalhes do Medicamento</h1>
              <p>Nome: {medicine?.name}</p>
              <p>
                Publicado em:{" "}
                {new Date(medicine?.published_at ?? "").toLocaleDateString(
                  "pt-BR"
                )}
              </p>
              <p>Empressa: {medicine?.company}</p>
            </div>

            <div className="medicine__details__documents">
              <h2>Documentos</h2>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {medicine?.documents.map((document: any) => (
                <div key={document.id} className="medicine__details__document">
                  <p>Tipo: {document.type}</p>
                  <a href={document.url} target="_blank" rel="noreferrer">
                    Visualizar
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section>
            <Animation />
          </section>
        </main>
      </Layout>
    </>
  );
}
