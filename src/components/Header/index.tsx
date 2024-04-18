import { List } from "@phosphor-icons/react";
import { Container, ContainerInputs, ContainerMenu } from './styles';
import { useState } from "react";

interface HeaderProps {
    onSearch: (medTerm: string, companyTerm: string) => void;
}

export function Header({ onSearch }: HeaderProps){
    const [medSearchTerm, setMedSearchTerm] = useState("");
    const [companySearchTerm, setCompanySearchTerm] = useState("");

    const handleMedInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMedSearchTerm(value);
        setTimeout(() => {
            onSearch(value, companySearchTerm);
        }, 300)
    };

    const handleCompanyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCompanySearchTerm(value);
        setTimeout(() => {
            onSearch(medSearchTerm, value);
        }, 300);
    };

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
                        value={medSearchTerm}
                        onChange={handleMedInputChange}
                    />
                </div>
                <div>
                    <span>Laboratório</span>
                    <input 
                        type="text" 
                        placeholder="Digite por laboratório"
                        value={companySearchTerm}
                        onChange={handleCompanyInputChange}
                    /> 
                </div>
            </ContainerInputs>
        </Container>
    )
}
