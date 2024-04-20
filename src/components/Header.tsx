import logo from '../img/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo da Dot.Lib" />
      <h1>
        Teste para Desenvolvedor Frontend
      </h1>
    </header>
  );
}

export default Header;