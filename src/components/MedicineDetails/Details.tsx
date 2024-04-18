
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Cards } from "../../model/card";
import { api } from "../../services/baseUrl";
import { PDFGenerator } from "../Pdf/PdfGenerator";
import { errorToast } from "../../helpers/Toasts";
import { FcCalendar, FcOrganization } from "react-icons/fc";
import { GiHospitalCross } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Loaders } from "../../helpers/Loaders";
import './Details.scss';
import './MediasDetails.scss';
import { DataContext } from "../../context/DataContext";

export const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Cards>();
  const { setSearched_value } = useContext(DataContext)

  useEffect(() => {
    getMedicineDetails(id!);
  }, [id]);

  const getMedicineDetails = async (id: string) => {
    try {
      const response = await api.get('/data');
      const result = response.data?.find((item: any) => item.id === id);
      if (result) {
        setDetails(result);
      }
    } catch (error) {
      errorToast();
      throw error;
    }
  }

  return (
    <main className="details">
      {details ? (
        <>
          <h1> Detalhes Do Medicamento </h1>
          <div>
            <h2> Medicamento </h2>
            <strong> <GiHospitalCross /> {details.name} </strong>
            <b> <FcOrganization /> {details.company} </b>
            <p> <FcCalendar /> {moment(details.published_at).format('DD/MM/YYYY')} </p>
          </div>
          <div>
            <h2> Principio Ativo </h2>
            {details.active_principles?.map((data: Cards) => {
              return (
                <span key={data.id}>
                  <b>  {data.name} </b>
                </span>
              )
            })}
          </div>
          <div>
            <h2> Documentos </h2>
            <span>
              <b> # DOWNLOAD PDF </b>
              <PDFGenerator className='PDF' data={details} />
            </span>
          </div>
          <div className='back_button'>
            <Link to={'/'} onClick={() => setSearched_value('')}><IoIosArrowRoundBack /> </Link>
          </div>
        </>
      ) : (<Loaders />)
      }
    </main>
  );
}