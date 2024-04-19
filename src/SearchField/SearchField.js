import React from 'react';
import style from './SearchField.css';

export default class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = {
            text: formData.get('text'),
            select: formData.get('select')
        };

        try {
            const response = await fetch('http://localhost:3000/data');
            let data = await response.json();
            
            data = data.filter((medicine) => {
                if (formValues.select === 'medicamento') {
                    return medicine.name.toLowerCase().includes(formValues.text.toLowerCase());
                } else {
                    return medicine.company.toLowerCase().includes(formValues.text.toLowerCase());
                }
            });
            
            this.props.setData(data);
            this.props.setcurrPage(1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    render() {

      return (

        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text" required placeholder="Medicamento ou Laboratório..." />
                <select name="select" id="target">
                    <option value="medicamento">Medicamento</option>
                    <option value="laboratorio">Laboratório</option>
                </select>
                <button type="submit">Buscar</button>
            </form>

        </div>
      );
    }
}