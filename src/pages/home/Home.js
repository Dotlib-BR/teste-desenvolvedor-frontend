

import React from 'react';
import style from './Home.css';
import { useState, useEffect } from 'react';


import SearchField from '../../SearchField/SearchField';
import ResultsContainer from '../../ResultsContainer/ResultsContainer';
import PagesNavigator from '../../PagesNavigator/PagesNavigator';
import Medicine from '../medicine/Medicine';

export default function Home() {
    const [modal, setModal] = useState();
    const [data, setData] = useState([]);
    const [currPage, setcurrPage] = useState(1);


    return (
        <div className='home-container'>
            <SearchField setData={setData} setcurrPage={setcurrPage}/>
            <PagesNavigator currPage={currPage} setcurrPage={setcurrPage}  total={Math.ceil(data.length/10)}/>
            <ResultsContainer data={data} setModal={setModal} currPage={currPage}/>
            {modal &&  <Medicine medicine={modal} setModal={setModal}/>}
        </div>
    );
}