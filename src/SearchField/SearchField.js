import React from 'react';
import style from './SearchField.css';


export default class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            text: formData.get('text'),
            select: formData.get('select')
        };


        window.alert(data);
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