import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import Table from '../../shared/components/Table';
import Line from '../../shared/components/Line/Line';

export function Home() {
    return (
        <>
            <Header />

            <Container>
                <Table>
                    <Line
                        id="oi"
                        name="AMOXICILINA"
                        company="MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA"
                        date="12/12/2019"
                        patient="oi"
                        professional="oi"
                    />
                    <Line
                        id="olá"
                        name="AMOXICILINA"
                        company="MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA"
                        date="12/12/2019"
                        patient="oi"
                        professional="oi"
                    />
                </Table>
            </Container>
        </>
    );
}
