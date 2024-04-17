import Image from "next/image"
import Icon from '../../assets/images/menu_icon.png'
import { LogoDiv, MenuStyled } from "./menu_styled"

const Menu = () => {
  return (
    <MenuStyled>
        <LogoDiv>
            <Image src={Icon} height={57} width={61} alt='Page icon' />
            <p>Bulário Eletrônico</p>
        </LogoDiv>

    </MenuStyled>
  )
}

export default Menu