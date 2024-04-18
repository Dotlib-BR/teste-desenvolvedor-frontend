import { List } from "@phosphor-icons/react";
import { Container, ContainerInputs, ContainerMenu } from './styles';

export function Header(){

    return(
        <Container>
            <ContainerMenu> 
                <span><List size={40} /></span>
                <p>PharmaGenius</p>
            </ContainerMenu>
            <ContainerInputs>
                <div>
                    <span style={{marginLeft:'-20px'}}>Medicamentos</span>
                    <input 
                        type="text" 
                        placeholder="Digite por medicamento"
                    />
                </div>
                <div>
                    <span>Laboratório</span>
                    <input 
                        type="text" 
                        placeholder="Digite por laboratório"
                    /> 
                </div>
            </ContainerInputs>
        </Container>
    )
}
