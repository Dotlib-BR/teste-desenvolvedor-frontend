import './style.scss'

const FormProduct = () =>{
  return(
    <section className="section-formSearch">
      <form action="">
        <h1>Critérios para consulta</h1>

        <label htmlFor="name">Nome do Medicamento</label>
        <input type="text" name='name' id='name' placeholder='Medicamento' />

        <label htmlFor="company">Empresa</label>
        <input type="text" name='company' id='company' placeholder='Empresa' />

        <button>Consultar</button>
      </form>
    </section>
  )
}

export default FormProduct;