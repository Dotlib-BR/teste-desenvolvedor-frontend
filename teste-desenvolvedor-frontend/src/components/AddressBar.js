// AddressBar.js
import React from 'react';
import logo from '../img/dotlib.png';
import './logo.css';
import SearchBar from './SearchBar'; 

const AddressBar = ({ onSearch }) => {
  return (
    <div className="address-bar">
      <img src={logo} alt="Logo" className="logo-img" />
      <span className="logo-text">Bulário Eletrônico</span>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default AddressBar;
