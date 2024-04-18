import { useMedicineData } from "../context/MedicineDataContext";

const Filters = () => {
  const { medicineData, setFilteredMedicineData } = useMedicineData();

  const handleFilter = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { value } = event.target;

    if (!value) setFilteredMedicineData(medicineData);

    setFilteredMedicineData((prev) =>
      prev.filter((item) =>
        type === "name"
          ? item.name.toLowerCase().includes(value.toLowerCase())
          : item.company.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Busque por nome"
        onChange={(event) => handleFilter(event, "name")}
      />
      <input
        type="text"
        placeholder="Busque por empresa"
        onChange={(event) => handleFilter(event, "")}
      />
    </section>
  );
};

export default Filters;
