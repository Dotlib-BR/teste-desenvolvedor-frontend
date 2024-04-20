import "./ResultPage.css"
import Pagination from "../Pagination/Pagination";
import { useState } from "react";


function ResultPage({ tableArray,  setResultOpen, drug, setDrug, labs, setLabs }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [postPerPage, setPostPerPagae] = useState(10);

  if (drug) {
    tableArray = tableArray.filter((item) => {
      return drug.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(drug);
    })
  }


  if (labs) {
    tableArray = tableArray.filter((item) => {
      return labs.toLowerCase() === ''
        ? item
        : item.company.toLowerCase().includes(labs);
    })
  }

  const indexOfLastPost = pageNumber * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPosts = tableArray.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts)



  function formatDate(date) {
    return new Date(date).toLocaleString("pt-br", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }


  function handleExit() {
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
            currentPosts.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name}
                </td>
                <td>
                  {
                    item.active_principles
                      .map((principle) => principle.name)
                      .join(', ')
                  }
                </td>
                <td>
                  {item.company}
                </td>
                <td>
                  {formatDate(item.published_at)}
                </td>
                <td>
                  {<a href={item.documents[0].url}>Baixar</a>}
                </td>
                <td>
                  {<a href={item.documents[1].url}>Baixar</a>}
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
            <Pagination
                postPerPage={postPerPage}
                totalPosts={
                  drug || labs ? currentPosts.length : tableArray.length
                }
                setPageNumber={setPageNumber}
            />
          </div>
        </section>
      </section>
    </article>
  )
}

export default ResultPage