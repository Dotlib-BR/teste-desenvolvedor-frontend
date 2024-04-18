import { useState } from "react"
import "./ResultPage.css"

function ResultPage({ tableArray, setPageNumber,pageNumber,setResultOpen, setDrug, setLabs}) {

  function formatDate(date) {
    return new Date(date).toLocaleString("pt-br", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }

  function handlePrevPage (){
    if(pageNumber > 1){
      setPageNumber(pageNumber - 1);
    }
  }

  function handleNextPage (){
    if(pageNumber < 3){
      setPageNumber(pageNumber + 1)
    }
  }

  function handleExit(){
    setResultOpen(false);
    setDrug('');
    setLabs('');
  }

   

  return (
    <article className="main-result-table">

      <div className="resultPage-table-header">
        <h2>
          Resultados da pesquisa
        </h2>
      </div>

      <section className="section-main-table">
        <table>
          <tr>
            <th>
              Medicamento
            </th>
            <th>
              Princípio ativo
            </th>
            <th>
              Laboratório
            </th>
            <th>
              Data de publicação
            </th>
            <th>
              Bula do paciente
            </th>
            <th>
              Bula do profissional
            </th>
          </tr>
          {
            tableArray.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.active_principles.map((name) => (
                    name.name
                  ))}
                </td>
                <td>
                  {item.company}
                </td>
                <td>
                  {formatDate(item.published_at)}
                </td>
                <td >
                  {/* {item.documents[0].url} */}
                </td>
                <td>
                  {/* {item.documents[1].url} */}
                </td>
              </tr>
            ))
          }
        </table>
        <section className="result-table-footer">

          <button 
            id="exit-button"
            onClick={() => handleExit()}
          >
            Voltar
          </button>

          <div className="resultPage-sumary-buttons">
            <button onClick={() => handlePrevPage()}>
              &lt;
            </button>
            <button onClick={() => setPageNumber(1)}>
              1
            </button>
            <button  onClick={() => setPageNumber(2)}>
              2
            </button>
            <button  onClick={() => setPageNumber(3)}>
              3
            </button>
            <button onClick={() => handleNextPage()}>
              &gt;
            </button>
          </div>
        </section>
      </section>
    </article>
  )
}

export default ResultPage