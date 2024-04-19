import React from "react";
import style from "./Medicine.css";
export default class Medicine extends React.Component {

    formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
      
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    

    render() {
        return (<>
            <div class="medicine-modal">
                <div class="medicine-container">
                <button class="medicine-back" onClick={()=> {this.props.setModal(null)}}> voltar </button>

                <div className="medicine-header">
                    <div>
                        <p className="medicine-id">{this.props.medicine.id}</p>
                        <p className="medicine-date">{this.props.medicine.published_at}</p>
                    </div>
                    <p className="medicine-name">{this.props.medicine.name}</p>
                    <p className="medicine-company">{this.props.medicine.company}</p>
                </div>
                

                { this.props.medicine.active_principles &&
                    <div className="medicine-documents">
                        <a href={this.props.medicine.documents[0].url} target="blank">
                            <span class="material-symbols-outlined"> description</span>
                            <p> Profissional </p>
                        </a>
                        <a href={this.props.medicine.documents[1].url} target="blank">
                            <span class="material-symbols-outlined">description</span>
                            <p> Paciente </p>
                        </a>
                    </div>
                }

                { this.props.medicine.active_principles &&
                    <div className="medicine-principles">
                        { this.props.medicine.active_principles.map((principle) => (
                            <span>{principle.name}</span>
                        ))}
                    </div>
                }
                </div>

            </div>
            </>
        );
    }
}













