//components
import Layout from "../../components/layout";
import MedicineList from "../../components/medicineList";
import Animation from "../../components/animations/medicine";

//styles
import "./style.sass";

export default function index() {
  return (
    <Layout>
      <main className="main">
        <section className="main__container">
          <div className="main__container__text">
            <h2>
              Bem-vindo ao <span>Bulário Eletrônico</span>
            </h2>
            <p>
              Aqui você encontra informações sobre os mais diversos remédios
              disponíveis no mercado.
            </p>
          </div>
          <div className="main__container__animation">
            <Animation />
          </div>
        </section>
        <MedicineList />
      </main>
    </Layout>
  );
}
