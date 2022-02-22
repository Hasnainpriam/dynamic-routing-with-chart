import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav for-anchor col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
       <Link to='/home'><li><a className=" px-2 text-white
          ">Home</a></li></Link>  
         <Link to='/todo'><li><a className=" px-2 text-white">ToDo List</a></li></Link> 
         <Link to='/chart'><li><a className=" px-2 text-white">Chart</a></li></Link>
         <Link to='/about'><li><a className=" px-2 text-white">About</a></li></Link>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  );
};

export default Header;