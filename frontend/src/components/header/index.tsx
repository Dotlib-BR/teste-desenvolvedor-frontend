import Dotlib from '../../assets/dotlib.png';

const Header = () =>{
  return (
    <header className="header">
      <img src={Dotlib} alt="Logo da empresa" />
      <span>Gguife developer</span>
    </header>
  );
}

export default Header;