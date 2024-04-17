import { useEffect, useState } from "react";

//libs
import { useParams } from "react-router-dom";

//types
import { Medicine } from "../../../../types";

//axios
import axios from "axios";

export default function Index() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<Medicine>();

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`).then((response) => {
      setMedicine(response.data);
    });
  }, [id]);

  return (
    <>
      <h1>Medicine Details</h1>
      <p>Medicine ID: {id}</p>
      <p>Medicine Name: {medicine?.name}</p>
      <p>Publicado em: {
        new Date(medicine?.published_at ?? "").toLocaleDateString("pt-BR")
        }</p>
    </>
  )
}
