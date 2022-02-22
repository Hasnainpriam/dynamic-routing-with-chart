import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './ToDoList.css'

const ToDoList = () => {
  const [list,setList]=useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setList(data))
  },[])
  return (
    <div style={{margin:'2rem'}}>
      <div className=''>
      <div className='title-container'>
        <h4>ID</h4>
        <h4>TITLE</h4>
        <h4>STATE</h4>
        <h4>DETAILS</h4>  
      </div>
     { 
         list.map(li => <Details key={li.id} li={li}></Details>)
     }   
       </div>
      </div>
  );
};

export default ToDoList;