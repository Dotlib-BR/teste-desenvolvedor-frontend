import stringToDate from "../../../Functions/stringToDate";

function incluedZero(num: number) {
  const convert = `${num}`.padStart(2, '0');
  return convert;
}

const PublishedAt = ({data}: {data: string}) => {
  const newDate = stringToDate(data);


  if(!newDate) return null;
  if(newDate instanceof Date) 
    return (
    <td>{`${incluedZero(newDate.getDate())}/${incluedZero(newDate.getMonth())}/${newDate.getFullYear()}`}</td>
  )
}

export default PublishedAt;