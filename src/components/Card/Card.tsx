
import moment from "moment";
import { Link } from "react-router-dom";
import { Cards } from "../../model/card";
import { ellipsis_format } from "../../helpers/Ellipsis";
import { FcCalendar } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";
import { GiHospitalCross } from "react-icons/gi";
import './Card.scss';
import './MediasCard.scss';

export const Card = ({ id, name, company, published_at }: Cards) => {
  return (
    <>
      <Link to={`data/${id}`} key={id}>
        <strong> <GiHospitalCross /> {ellipsis_format(name)} </strong>
        <b> <FcOrganization /> {company} </b>
        <p> <FcCalendar /> {moment(published_at).format('DD/MM/YYYY')} </p>
      </Link>
    </>
  )
}