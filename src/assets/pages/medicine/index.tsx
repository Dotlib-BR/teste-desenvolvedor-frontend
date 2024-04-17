import { Link } from "react-router-dom";

//style
import "./style.sass";

export default function index() {
  return (
    <>
      <main>
        <section className="container">
          <h2>Vá para a página principal</h2>
          <p>
            <Link to="/">
              <button>
                Home
              </button>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
