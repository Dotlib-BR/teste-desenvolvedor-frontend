import React from "react";

function incluedZero(num: number) {
  const convert = `${num}`.padStart(2, '0');
  return convert;
}

const PublishedAt = ({data}: {data: string}) => {
  const [newDate, setNewDate] = React.useState<Date | null>(null);

  React.useEffect(()=> {
    const date = data.split('T')[0];
    const time = data.split('T')[1].split('.')[0];

    const day = +date.split('-')[2];
    const month = +date.split('-')[1];
    const year = +date.split('-')[0];

    const hours = +time.split(':')[0];
    const minutes = +time.split(':')[1];
    const seconds = +time.split(':')[2];

    const convertDate = new Date(year, month - 1, day, hours, minutes, seconds);
    setNewDate(convertDate);
  }, [data]);


  if(!newDate) return null;
  return (
    <td>{`${incluedZero(newDate.getDate())}/${incluedZero(newDate.getMonth())}/${newDate.getFullYear()}`}</td>
  )
}

export default PublishedAt;