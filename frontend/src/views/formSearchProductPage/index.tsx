import './style.scss'
import React, { FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Product, FormProductProps } from '../../types';

const FormSearchPage: React.FC<FormProductProps> = ({setProductsList}) =>{
 // const [ searchResult, setSearchResult ] = useState<Product[]>([]); 
  const navigate = useNavigate();

  const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    //Variaveis para os valores dos inputs
    const name = (e.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
    const company = (e.target as HTMLFormElement).elements.namedItem('company') as HTMLInputElement;
    
    //URL base 
    const apiURL = 'http://localhost:3000/data'
    
    //Requisiçao
    try{
      const response = await axios.get<Product[]>(apiURL);
      const searchResult = response.data;

      //condicoes para pesquisa do campo
      if(!name.value && !company.value){
        console.log(searchResult);
        setProductsList(searchResult);
        navigate('/medicamentos');
      }else{
        //Filtrar resultados com base na pesquisa feita pelo usuário
        const filteredResult = searchResult.filter(product => 
          (product.name == name.value || product.company == company.value)
        );
        //Verificando se existe os dados da pesquisa em nossa API
        if(filteredResult.length > 0){
          setProductsList(filteredResult);
          navigate('/medicamentos');
        }else{
          alert('Medicamento não encontrado!')
        }
      }

    }catch(error){
      console.error('Erro ao buscar os produtos: ', error)
    }
    
  }

  return(
    <section className="section-formSearch">
      <form onSubmit={handleSearchSubmit}>
        <h1>Critérios para consulta</h1>

        <label htmlFor="name">Nome do Medicamento</label>
        <input type="text" name='name' id='name' placeholder='Medicamento' />

        <label htmlFor="company">Empresa</label>
        <input type="text" name='company' id='company' placeholder='Empresa' />

        <button type='submit'>Consultar</button>
      </form>
    </section>
  )
}

export default FormSearchPage;