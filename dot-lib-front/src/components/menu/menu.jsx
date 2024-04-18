import sortIcon from "../../assets/funnel-outline.svg";
import { Body } from "./menuStyle";

export default function Menu({isTheOldItemFilterActive, setIsTheOldItemFilterActive}) {

  const filter = () => {
    if (isTheOldItemFilterActive === true) {
      setIsTheOldItemFilterActive(false);
    } else {
      setIsTheOldItemFilterActive(true);
    }
  };

  return (
    <Body>
      {!isTheOldItemFilterActive && (
        <button onClick={filter}>
          Mais antigos
          <img src={sortIcon} alt="Sort icon" />
        </button>
      )}
      {isTheOldItemFilterActive && (
        <button onClick={filter}>
          Mais novos
          <img src={sortIcon} alt="Sort icon" />
        </button>
      )}
    </Body>
  );
}
