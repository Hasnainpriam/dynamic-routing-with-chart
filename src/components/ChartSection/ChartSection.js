import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './ChartSection.css'
const ChartSection = () => {
  const [status,setStatus]=useState([]);
  let True=0;
  let False=0;
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setStatus(data))
  },[])
  
 for( const value of status){
   if(value.completed){
     True ++
   }
   else{
     False ++
   }
 }

  const data = [
    {
      name: 'Page A',
      Status: True,
    },
    {
      name: 'Page B',
      Status: False,
    }, 
  ];

  return (
    <div >
      <h1>Status Chart of the Task</h1>
      <div className='text-container'>
      <h1 className='text-success'>True</h1> 
      <h1 className='text-danger'>False</h1>
      </div>
     <div className='chart-section'>   
     <BarChart width={500} height={300} data={data}>
      <Bar dataKey="Status" fill="#8884d8" /><Tooltip />
    </BarChart>
     </div>
    </div>
  );
};

export default ChartSection;