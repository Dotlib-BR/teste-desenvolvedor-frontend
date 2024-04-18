import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IMedicineData } from "../context/MedicineDataContext.d";
import dayjs from "dayjs";
import Arrow from "../assets/Icons/Arrow";
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br');

const Details = () => {
  const [medicineDetails, setMedicineDetails] = useState(null as IMedicineData | null);
  const [search] = useSearchParams();
  const id = search.get("id");
  const navigate = useNavigate()

  const getMedicineById = async () => {
    const { data } = await axios.get(`http://localhost:3000/data/${id}`);

    setMedicineDetails(data);

    return data;
  };

  useEffect(() => {
    getMedicineById();
  }, []);

  console.log({ medicineDetails });

  if (!medicineDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <main>
    <button onClick={() => navigate(-1)} className="back-button"><span><Arrow disabled={false} /></span> Voltar</button>
    <section className="details">
        <div className="details__img">
            <img src="/medicamento.jpeg" alt="Medicamento Genérico" width={560} height={373}/>
        </div>
        <div className="details__info">
            <h2>{medicineDetails.name}</h2>
            <p className="id">{medicineDetails.id}</p>
            <p>Empresa: <span>{medicineDetails.company}</span></p>
            <p>Princípios Ativos: <span>{medicineDetails.active_principles[0].name}</span></p>
            <p>Publicado em: <span>{dayjs(medicineDetails.published_at).format("DD [de] MMMM [de] YYYY")}</span></p>
            <div>
                <p className="documents">Documentos</p>
                <span>
                    {medicineDetails.documents.map((document) => (
                        <a href='#' download={document.url}>{document.type === "PROFESSIONAL" ? 'Baixar bula profissional' : 'Baixar bula paciente'}</a>
                    ))}
                </span>
            </div>
        </div>
    </section>
    </main>
  )
};

export default Details;
