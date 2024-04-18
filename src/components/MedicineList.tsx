import { useMedicineData } from "../context/MedicineDataContext";

const MedicineList = () => {
  const { medicineData } = useMedicineData();

  console.log({ medicineData });

  return (
    <section>
      {medicineData.map((medicine) => (
        <div key={medicine.id}>
          <div>{medicine.name}</div>
        </div>
      ))}
    </section>
  );
};

export default MedicineList;
