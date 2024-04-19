import './App.css';
import React from 'react';
import Medicine from './pages/medicine/Medicine';
import Home from './pages/home/Home';

import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }


  render() {
    return (
      <>
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route exact path="/medicine/:id" element={<Medicine id="{id}" />}/>
            </Routes>
        </BrowserRouter>
      </>
    );
  }
}
