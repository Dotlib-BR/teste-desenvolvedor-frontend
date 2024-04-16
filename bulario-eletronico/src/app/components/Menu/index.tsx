import Image from "next/image"
import Icon from '../../assets/images/menu_icon.png'
import { ListOption, ListOptions, LogoDiv, MenuStyled } from "./menu_styled"

const Menu = () => {
  return (
    <MenuStyled>
        <LogoDiv>
            <Image src={Icon} height={57} width={61} alt='Page icon' />
            <p>Bulário Eletrônico</p>
        </LogoDiv>

        <div>
            <ListOptions>
                <ListOption>
                    <a href="">Início</a>
                </ListOption>
                <ListOption>
                    <a href="">Filtros</a>
                </ListOption>
                <ListOption>
                    <a href="">Medicamentos</a>
                </ListOption>
                
            </ListOptions>
        </div>
    </MenuStyled>
  )
}

export default Menu