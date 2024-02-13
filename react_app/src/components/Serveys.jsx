import React from 'react'
import  './serveys.css'
import { userStateContext } from '../contex/ContecProvider';

const Serveys = () => {

  const {surveys} = userStateContext();
  console.log(surveys);

  return (
    <div className="main">
    <h1 className='heading'>Surveys</h1>
  <br /><br />
  <hr />


  
  </div>
  )
}

export default Serveys