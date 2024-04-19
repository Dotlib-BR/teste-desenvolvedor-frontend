//React
import { useState } from "react";

//Styles
import { Container, Section } from "./footer.styles";

//Data
import { footerData } from "./data/footerData";

//Service
import { getMedicineByPageOrId } from "../../service/service";

//Context
import { useGlobalContext } from "../../context/context";

function Footer() {
  const { setState } = useGlobalContext();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlePage = (page: number) => {
      getMedicineByPageOrId(setState, undefined, page);
      setSelectedId(page);
  };


  return (
    <Container>
      {footerData.map((data) => (
        <Section
          key={data.id}
          onClick={() => handlePage(data.id)}
          isSelected={selectedId === data.id}
        >
          {data.content}
        </Section>
      ))}
    </Container>
  );
}

export default Footer;
