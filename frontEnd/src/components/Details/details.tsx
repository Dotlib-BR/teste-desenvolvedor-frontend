//Styles
import {
  Background,
  Content,
  Header,
  Title,
  ExitIcon,
  Main,
  Section,
  Link,
  Text,
  Footer,
} from "./details.styles";
import { showUpAnimation } from "../../styles/animation";

//Context
import { useGlobalContext } from "../../context/context";

//Utils
import { handleDocumentText } from "./utils/detailsUtils";

//Icons
import { FileText } from "lucide-react";

//Utils
import { formatToPtBrDate } from "../../utils/utils";

function Details() {
  const { state, setState } = useGlobalContext();
  const medicineDetails = state.detailsData;

  const handleExit = () => {
    setState((prevState) => ({
      ...prevState,
      showDetails: false,
    }));
  };

  return (
    <Background>
      <Content {...showUpAnimation}>
        <Header>
          <Title>{medicineDetails?.name}</Title>
          <ExitIcon onClick={() => handleExit()} />
        </Header>
        <Main>
          <Link href={medicineDetails?.documents[0].url} target="_blank">
            <FileText size={60} />
            {handleDocumentText(medicineDetails?.documents[0].type)}
          </Link>
          <Link href={medicineDetails?.documents[1].url} target="_blank">
            <FileText size={60}/>
            {handleDocumentText(medicineDetails?.documents[1].type)}
          </Link>
        </Main>
        <Footer>
          <Section>
            <Text value="key">Empresa:</Text>
            <Text>{medicineDetails?.company}</Text>
          </Section>
          <Section>
            <Text value="key">Princípio Ativo:</Text>
            <Text>{medicineDetails?.active_principles[0].name}</Text>
          </Section>
          <Section>
            <Text value="key">Publicação:</Text>
            <Text>{formatToPtBrDate(medicineDetails?.published_at || "")}</Text>
          </Section>
        </Footer>
      </Content>
    </Background>
  );
}

export default Details;
