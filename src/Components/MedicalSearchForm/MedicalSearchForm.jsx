import React, { useState } from 'react'
import './MedicalSearchForm.css'

function MedicalSearchForm({ drug, setDrug, labs, setLabs, setResultOpen }) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCleanForm() {
        setDrug('');
        setLabs('');
    }

    function handleResultVisibility() {
        setResultOpen(true)
    }


    return (
        <article className='main-form-article'>
            <div>
                <h2>
                    Critérios da pesquisa
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Medicamento:
                    <input
                        type="text"
                        value={drug}
                        onChange={(e) => setDrug(e.target.value)}
                    />
                </label>

                <label>
                    Laboratório:
                    <input
                        type="text"
                        value={labs}
                        onChange={(e) => setLabs(e.target.value)}
                    />
                </label>
            </form>
            <section>
                <button onClick={handleResultVisibility}>
                    Consultar
                </button>
                <button onClick={handleCleanForm}>
                    Limpar
                </button>
            </section>
        </article>
    )
}

export default MedicalSearchForm