import {useState, useEffect} from 'react'


const Form = (props) => {
    const [inputVal, setInputVal] = useState("")

    const handleChange = evt =>{
        setInputVal(evt.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        props.setSearchTxt(inputVal)
    }

    return <form>
        <label>Nome do medicamento:</label>
        <input type="text" name="inputVal" value={inputVal} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Buscar</button>
    </form>
}

export default Form;