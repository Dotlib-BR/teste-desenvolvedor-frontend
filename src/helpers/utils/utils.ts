export const dateConverter = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

export const breakStringByPlus = (value: string) => {
  return value.split("+");
};
