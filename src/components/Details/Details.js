import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'
const Details = (props) => {
  const {id,title,completed}=props.li
  return (
   <div className='main-container'>
      <div className='display-container'>
        <h5>{id}</h5>
      <p>{title.toUpperCase()}</p>
      <p>{completed.toString().toUpperCase()}</p>
      <Link to={`/toDoList/${id}`}><button type="button" className="btn btn-warning" >See Details</button></Link>
    </div>
   </div>
  );
};

export default Details;