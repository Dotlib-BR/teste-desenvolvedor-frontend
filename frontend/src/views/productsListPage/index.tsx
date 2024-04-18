import { ProductListPageProps } from "../../types";
import { useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { BiFirstPage, BiLastPage  } from "react-icons/bi";




const ProductListPage: React.FC<ProductListPageProps> = ({productList}) =>{
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  //Lógica para calcular a quantidade de produtos que seram exibidos por pagina
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProduct = productList.slice(indexFirstProduct, indexLastProduct);



  return(
    <section className="product-list">
      <Link to='/' className="back-page">< BiFirstPage />Página de Pesquisa</Link>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Medicamento</th>
              <th>Empresa</th>
              <th>Expediente</th>
              <th>Data de Publicação</th>
              <th>Princípios Ativos</th>
              <th>Bula Paciente</th>
              <th>Bula Profissional</th>
            </tr>
          </thead>
          <tbody>
            {currentProduct.map((product) => (
              <tr key={product.id}>
                <td><Link to={`/medicamento/${product.id}`}>{product.name}</Link></td>
                <td className="company">{product.company}</td>
                <td>{product.documents[0].expedient}</td>
                <td>{new Date(product.published_at).toLocaleDateString('pt-BR')}</td>
                <td>
                  <ul>
                    {product.active_principles.map(principle => (
                      <li key={principle.id}>{principle.name}</li>
                    ))}
                  </ul>
                </td>
                <td><a href={product.documents.find(doc => doc.type === "PATIENT")?.url}><FaFilePdf className="pdf-icon"/></a></td>
                <td><a href={product.documents.find(doc => doc.type === "PROFESSIONAL")?.url}><FaFilePdf className="pdf-icon"/></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
        <div className="pages-buttons">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}><BiFirstPage className="arrow-page" /></button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexLastProduct >= productList.length}><BiLastPage className="arrow-page" /></button>
        </div>
    </section>
  )
}

export default ProductListPage;