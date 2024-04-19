//Styles
import { Container, Section, Title } from "./header.styles"

//Components
import Search from "./Search/search"
import Ordenation from "./Ordenation/ordenation"

function Header() {
  return (
    <Container>
        <Section>
            <Title>Bulário</Title>
        </Section>
        <Section>
            <Search />
            <Ordenation />
        </Section>
   </Container>
  )
}

export default Header