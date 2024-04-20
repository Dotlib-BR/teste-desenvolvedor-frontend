import './Main.css'
import Header from '../../Components/Header/Header'
import MedicalSearchForm from '../../Components/MedicalSearchForm/MedicalSearchForm'
import { useState, useEffect } from 'react'
import ResultPage from '../../Components/ResultPage/ResultPage';
import api from '../../Services/api';

function Main() {

  const [drug, setDrug] = useState('');
  const [labs, setLabs] = useState('');
  const [resultOpen, setResultOpen] = useState(false);
  const [localData, setLocalData] = useState({});
 
  function removeSpecialCharacters(text) {
    var pattern = /[^a-zA-Z0-9\s]/g;
    var newText = text.replace(pattern, '');
    return newText;
}


  async function getData() {
    try {

      const pageResponse = await api.get(`/data`);
      setLocalData(pageResponse.data);

      return;


    } catch (error) {
    }
  }

  useEffect(() => {

    getData();

    setDrug(drug.toLowerCase());
    setLabs(labs.toLowerCase());

    setDrug(removeSpecialCharacters(drug));
    setLabs(removeSpecialCharacters(labs));

  }, [resultOpen])

  return (
    <>
      <Header
        MainHeaderText={"Bulário Eletrônico"}
      />
      <main>
        {
          resultOpen ?
            <ResultPage
              tableArray={localData}
              drug={drug}
              labs={labs}
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