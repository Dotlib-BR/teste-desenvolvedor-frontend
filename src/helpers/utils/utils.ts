export const dateConverter = (date: string) => {
  const newDate = new Date(date);

  const day = String(newDate.getUTCDate()).padStart(2, "0");
  const month = String(newDate.getUTCMonth() + 1).padStart(2, "0");
  const year = newDate.getUTCFullYear();
  const hours = String(newDate.getUTCHours()).padStart(2, "0");
  const minutes = String(newDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(newDate.getUTCSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const breakStringByPlus = (value: string) => {
  return value.split("+");
};
