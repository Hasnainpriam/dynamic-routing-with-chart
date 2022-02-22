import React from 'react';
import './NotFound.css'
import img from '../Images/img.gif'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <img src={img} alt="" />
      <h4>Looks like , you are lost.</h4>
      <Link to='/home'><button className='btn btn-outline-success'>Back to Home</button></Link>
    </div>
  );
};

export default NotFound;