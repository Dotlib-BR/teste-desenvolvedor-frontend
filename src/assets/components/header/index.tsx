import Pills from "../../../../public/pills.svg";

//react-router-dom
import { Link } from "react-router-dom";

//styles
import "./style.sass";

export default function index() {
  return (
    <>
      <header>
        <section className="header__container">
          <div className="header__container__logo">
            <Link to="/">
              <img src={Pills} alt="Pills" />
              <h1>Bulário de Remédios</h1>
            </Link>
          </div>
          <nav className="header__container__nav">
            <Link to="/">
              Home
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
