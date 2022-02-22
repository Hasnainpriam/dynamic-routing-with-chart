import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Single.css'
const Single = () => {
  let {listId}=useParams();
  let url=`https://jsonplaceholder.typicode.com/todos/${listId}`

  const [item,setItem]=useState([]);
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data => setItem(data))
  },[])

  return (
    <div className="single">
      <h3>User Id: {item.userId}</h3>
      <h4 className='text-secondary'>Title : {item.title}</h4>
      <h6>Status: {
        (item.completed === true) ? <div className='text-success'>
              <h2>You have complete your Task.</h2>
        </div>
        : <div className='text-danger'>
              <h2>Dude, Finish your Task</h2>
        </div>   
        }</h6>
    </div>
  );
};

export default Single;