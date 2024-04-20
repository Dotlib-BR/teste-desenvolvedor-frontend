import "./ResultPage.css"
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import OrderIcon from "../../Assets/OrderIcon.svg"
import pdfsample from "../../api/public/pdf_sample.pdf"
import pdfIcon from "../../Assets/pdfIcon.png"


function ResultPage({ tableArray, setResultOpen, drug, setDrug, labs, setLabs }) {

  const [pageNumber, setPageNumber] = useState(1);
  const [postPerPage, setPostPerPagae] = useState(10);
  const [isAscending, setIsAscending] = useState(true);

  const indexOfLastPost = pageNumber * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;



  if (drug && labs) {

    tableArray = tableArray.filter((item) => {
      return drug.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(drug);
    })

    tableArray = tableArray.filter((item) => {
      return labs.toLowerCase() === ''
        ? item
        : item.company.toLowerCase().includes(labs);
    })

    return;
  }


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


  let currentPosts = tableArray.slice(indexOfFirstPost, indexOfLastPost);


  function formatDate(date) {
    return new Date(date).toLocaleString("pt-br", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }



  function sortByDateAscending(items) {
    return items.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
  }

  function sortByDateDescending(items) {
    return items.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
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
          <tbody>
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
              <th id="order-by-date" onClick={() => setIsAscending(!isAscending)}>
                Data de publicação
                <img
                  src={OrderIcon}
                  alt="Seta indicando que a lista está ordenada em ordem acendente"
                />
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
                    {
                      <a href={pdfsample} download='bula do paciente'>
                        <img src={pdfIcon} alt="Botão de download da bula do paciente em pdf" />
                      </a>
                    }
                  </td>
                  <td>
                    {
                      <a href={pdfsample} download='bula do profissional'>
                        <img src={pdfIcon} alt="Botão de download da bula do profissional em pdf" />
                      </a>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <section className="result-table-footer">

          <button
            id="exit-button"
            onClick={() => handleExit()}
          >
            Voltar
          </button>

          <div>
            <Pagination
              postPerPage={postPerPage}
              totalPosts={tableArray.length}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              
            />
          </div>
        </section>
      </section>
    </article>
  )
}

export default ResultPage