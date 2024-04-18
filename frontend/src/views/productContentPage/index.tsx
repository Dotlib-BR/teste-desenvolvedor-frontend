import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types";
import './style.scss';
import { FaFilePdf } from "react-icons/fa";


const ProductPage = () =>{
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() =>{
    const fetchProduct = async () =>{
      try{
        const response = await axios.get(`http://localhost:3000/data/${id}`);
        setProduct(response.data);
      }catch(error){
        console.error('Error ao buscar o product:', error)
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id])


  if (!product) {
    return <div>Carregando...</div>;
  }

  return(
    <section className="product-card-section">
      <h1>Detalhes do Produto: <span>{product.name}</span></h1>
      <div className="product-card-container">
        <p>Nome da Empresa: <span>{product.company}</span></p>
        <p>Data de publicação: <span>{new Date(product.published_at).toLocaleDateString('pt-BR')}</span></p>
        <p>Princípios Ativos:
          {product.active_principles.map(principle => (
            <span key={principle.id}> {principle.name}</span>
          ))}
        </p>
        <p>Expediente: <span>{product.documents[0].expedient}</span></p>
        <div className="product-types">
          <p>Paciente<a href={product.documents.find(doc => doc.type === "PATIENT")?.url}><FaFilePdf className="pdf-icon"/></a></p>
          <p>Profissional<a href={product.documents.find(doc => doc.type === "PROFESSIONAL")?.url}><FaFilePdf className="pdf-icon"/></a></p>        
        </div>
      </div>
      
    </section>
  )
}

export default ProductPage;