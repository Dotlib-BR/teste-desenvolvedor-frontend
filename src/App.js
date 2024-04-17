import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import Page from './Page.js'
import {useState, useEffect} from 'react';

const API_URL = "http://localhost:3000/data"

const getMeds = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}

function App() {
  const [searchTxt, setSearchTxt] = useState("")
  const [meds, setMeds] = useState()
  const [wasReqSuccessful, setWasReqSuccessful] = useState(false)

  useEffect(()=>{
    getMeds().then(responseData=>{
      setMeds(responseData)
      setWasReqSuccessful(true)
    })
  }, [])

  
  var pagedMeds = []
  
  if (wasReqSuccessful){
    const medsFilteredAndOrdered = meds.filter(med => med.name.toLowerCase().includes(searchTxt.toLowerCase())).sort((a, b)=> Date.parse(b.published_at) - Date.parse(a.published_at))

    const getPagedMeds = () =>{
      const pagedMeds = []
    
        const numPages = Math.ceil(meds.length/10)
        for(let i = 0; i <= numPages-1; i++){
          let numMedsToGetIntoPage;
          numPages == i ? numMedsToGetIntoPage = medsFilteredAndOrdered.length: numMedsToGetIntoPage = 9;
          pagedMeds.push(medsFilteredAndOrdered.splice(0, numMedsToGetIntoPage))
        }
      return pagedMeds;
    }

    pagedMeds = getPagedMeds()
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Medicamentos</h1>
      </header>
      <Form setSearchTxt={setSearchTxt} />
      {
        pagedMeds.map(medsForAPage=> <Page meds={medsForAPage} />)
        }  
    </div>
  );
}

export default App;
