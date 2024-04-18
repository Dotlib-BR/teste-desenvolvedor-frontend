export const stringToDate = (data: string): Date => {
    const date = data.split('T')[0];
    const time = data.split('T')[1].split('.')[0];

    const day = +date.split('-')[2];
    const month = +date.split('-')[1];
    const year = +date.split('-')[0];

    const hours = +time.split(':')[0];
    const minutes = +time.split(':')[1];
    const seconds = +time.split(':')[2];

    const convertDate = new Date(year, month - 1, day, hours, minutes, seconds);
    

  return convertDate;
}

export default stringToDate;