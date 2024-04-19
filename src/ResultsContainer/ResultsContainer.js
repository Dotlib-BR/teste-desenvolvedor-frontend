import React from 'react';
import style from './ResultsContainer.css';



class Result extends React.Component {

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

    return (
      <button className="result" onClick={()=>{this.props.setModal(this.props.medicine)}}>
        <div className="result-header">
            <h3 className='product-name'>{this.props.medicine.name}</h3>
            <p className='company'>{this.props.medicine.company}</p>
            <p className='date'>{this.formatDate(this.props.medicine.published_at)}</p>
        </div>
        <div className="result_active_principles">
            {this.props.medicine.active_principles.map((active_principle) => (<span>{active_principle.name}</span>))}
        </div>
        </button>
    );
    }
}

export default class ResultsContainer extends React.Component {

    render() {
        const initial = ((this.props.currPage-1) * 10);
        const slicedData = (this.props.data).slice(initial, initial+10);

        return (
            <div class="results-container">
                {slicedData.map(
                    (result) => (
                        <Result medicine={result} setModal={this.props.setModal} />
                    ))
                }
            </div>
        );
        
    }
}