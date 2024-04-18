import { Medication } from '../Context/DataContext'
import stringToDate from './stringToDate';

const orderBy = (data: Medication[]) => {
  const newDate = data.sort((a, b)=> {
    const dateA = new Date(stringToDate(a.published_at));
    const dateB = new Date(stringToDate(b.published_at));

    return dateB.getTime() -  dateA.getTime();
  });  

  return newDate;
}

export default orderBy;