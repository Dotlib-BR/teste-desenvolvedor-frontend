import React, { useState } from 'react'
import './MedicalSearchForm.css'

function MedicalSearchForm() {

    return (
        <article className='main-form-article'>
            <div>
                <h2>
                    Critérios da pesquisa
                </h2>
            </div>
            <form>
                <label>
                    Medicamento:
                    <input type="text" />
                </label>
               
                <label>
                    Laboratório:
                    <input type="text"/>
                </label>
            </form>
            <section>
                <button>
                    Consultar
                </button>
                <button>
                    Limpar
                </button>
            </section>
        </article>
    )
}

export default MedicalSearchForm