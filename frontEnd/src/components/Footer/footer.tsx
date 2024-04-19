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

  const handlePage = (page: number) => {
    getMedicineByPageOrId(setState, undefined, page);
  };

  return (
    <Container>
      {footerData.map((data) => (
        <Section key={data.id} onClick={() => handlePage(data.id)}>
          {data.content}
        </Section>
      ))}
    </Container>
  );
}

export default Footer;
