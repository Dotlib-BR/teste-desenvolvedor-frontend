import React from 'react';
import style from './PagesNavigator.css';


export default class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            page: 1,
            total: 10
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            text: formData.get('text'),
            select: formData.get('select')
        };


        /*window.alert(data);*/
    }

    render() {

      return (
        <div id="page-navigator">
            <button class="material-symbols-outlined" onClick={()=>{
                if(this.props.currPage > 1)
                    this.props.setcurrPage(this.props.currPage - 1)
            }}>chevron_left</button>

            {this.props.currPage} 
            {'\u00A0'}de{'\u00A0'} 
            {this.props.total}

            <button class="material-symbols-outlined" onClick={()=>{
                if(this.props.currPage < this.props.total)
                    this.props.setcurrPage(this.props.currPage + 1)
            }}>chevron_right</button>
        </div>
      );
    }
}