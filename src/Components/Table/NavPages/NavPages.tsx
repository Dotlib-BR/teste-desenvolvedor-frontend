import React from 'react';
import styles from './NavPages.module.css';
import { DataPages } from '../Table';
import doubleArrow from '../../../assets/doubleArrow.png';

type NavPages = {
  data: DataPages;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const styleBtnArrowsEnabled: React.CSSProperties = {
  opacity: "1"
}

const styleBtnArrowsDisabled: React.CSSProperties = {
  opacity: "0.5"
}

const NavPages = ({data, page, setPage}: NavPages) => {
  return (
    <div className={styles.NavPages}>
      <ul className={styles.listPages}>
        <li
          style={page === data.first ?
            styleBtnArrowsDisabled :
            styleBtnArrowsEnabled
           }
          onClick={()=> setPage(data.first)}>
          <img src={doubleArrow} aria-label='Primeira página'/>
        </li>

      {Array.from({ length: data.pages }, (_, index) => (
        <li
          style={page === index+1 ?
                  { color: "var(--bg-color)",
                    backgroundColor: 'var(--color-1)'
                  }:
                  {}
                }
          key={index}
          onClick={()=> setPage(index+1)}>
            {`${index + 1}`}
        </li>
      ))}
        <li
          style={page === data.last ?
            styleBtnArrowsDisabled :
            styleBtnArrowsEnabled
          }
          onClick={()=> setPage(data.last)}>
          <img src={doubleArrow} aria-label='Última página'/>
        </li>
      </ul>
      <p>Mostrando {data.data.length} de {data.items}</p>
    </div>
  )
}

export default NavPages;