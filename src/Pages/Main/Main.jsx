import './Main.css'
import Header from '../../Components/Header/Header'
import MedicalSearchForm from '../../Components/MedicalSearchForm/MedicalSearchForm'
import { useEffect, useState } from 'react'
import ResultPage from '../../Components/ResultPage/ResultPage';
import api from '../../Services/api';

function Main() {

  const [drug, setDrug] = useState('');
  const [labs, setLabs] = useState('');
  const [resultOpen, setResultOpen] = useState(false);
  const [localData, setLocalData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);


  console.log(pageNumber)



  async function getData() {
    try {
      
      if(!drug && !labs){

        const pageResponse = await api.get(`data?_page=${pageNumber}`);
        setLocalData(pageResponse.data.data);

        return

      }
   
      const response = await api.get('/data');
      setLocalData(response.data);
      
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {

   getData()

    
  }, [resultOpen, pageNumber])

  return (
    <>
      <Header
        MainHeaderText={"Bulário Eletrônico"}
      />
      <main>
        {
          resultOpen ?
            <ResultPage 
              tableArray= {localData}
              pageNumber= {pageNumber}
              setPageNumber={setPageNumber}
              setResultOpen={setResultOpen}
              setDrug={setDrug}
              setLabs={setLabs}
            />
            :
            <MedicalSearchForm
              drug={drug}
              labs={labs}
              setDrug={setDrug}
              setLabs={setLabs}
              setResultOpen={setResultOpen}
            />
        }
      </main>
    </>
  )
}

export default Main