import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { Header } from "../../components/Header"
import { BlinkingH6, ButtonFooter, Container, MedicineContainer } from "./styles"

export function Home() {
   


        return (
            <MedicineContainer>
                <h1 style={{textAlign:'center'}}>name</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>
                    <div>
                        <p>Compania</p>
                        <strong>testes</strong>
                    </div>
                    <div>
                        <p>Publicação</p>
                        <strong>teste</strong>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button >Download bula</button>
                </div>
            </MedicineContainer>
        )
    

    return (
        <Container>
            <Header 
    
            />
            <BlinkingH6>Ajudamos os consumidores a achar mais de mil medicamentos e bula por dia..</BlinkingH6>
            <footer>
                <ButtonFooter >
                    <CaretLeft />
                </ButtonFooter>
                <strong>10</strong>
                <strong>de</strong>
                <strong>20</strong>
                <ButtonFooter>
                    <CaretRight/>
                </ButtonFooter>
            </footer>
        </Container>
    )
}
