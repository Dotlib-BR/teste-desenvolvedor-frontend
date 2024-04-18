import { useMedicineData } from "../context/MedicineDataContext";

const Filters = () => {
  const { medicineData, setFilteredMedicineData, searchTerm, setSearchTerm } = useMedicineData();

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
    <section className="filters">
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={(event) => {handleFilter(event, "name"); setSearchTerm((prev) =>({...prev, name: event.target.value}))}}
        value={searchTerm.name}
      />
      <input
        type="text"
        placeholder="Buscar por empresa"
        onChange={(event) => {handleFilter(event, ""); setSearchTerm((prev) =>({...prev, company: event.target.value}))}}
        value={searchTerm.company}
      />
    </section>
  );
};

export default Filters;
