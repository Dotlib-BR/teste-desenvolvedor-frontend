import { useState, useEffect } from "react";

import Pills from "../../../../public/pills.svg";

//react-router-dom
import { Link } from "react-router-dom";

//styles
import "./style.sass";

export default function Index() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <header className={scroll ? "header__scroll" : "header"}>
        <section className="header__container">
          <div className="header__container__logo">
            <Link to="/">
              <img src={Pills} alt="Pills" />
              <h1>Bulário Eletrônico</h1>
            </Link>
          </div>
          <nav className="header__container__nav">
            <Link to="/">Home</Link>
          </nav>
        </section>
      </header>
    </>
  );
}
