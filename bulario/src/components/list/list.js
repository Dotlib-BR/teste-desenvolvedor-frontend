import React from 'react';
import './list.css';

const List = (props) => (
  <div>
    <table>
    <tbody>
        <tr>
          {props.columns.map((item, index) => {
            return <th key={index}><button className='headers-btn'>{item}</button></th>
          })}
        </tr>
        {props.rows.map((item, index) => {
          return <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.published_at}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
);

export default List;
