import React from 'react'
import  './serveys.css'
import { userStateContext } from '../contex/ContecProvider';
import SurveyListItems from './SurveyListItems';

const Serveys = () => {

  const {surveys} = userStateContext();
  // console.log(surveys);

  const onDeleteClick = () => {
      console.log("on delete");
  };

  return (
    <>
    <div className="main">
    <h1 className='text-4xl heading'>Surveys</h1>
  <br /><br /> <br />  
  <hr />
<div className='container'>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">

    {surveys.map(survey=>(

      <SurveyListItems survey={survey} key={survey.id} onDeleteClick={onDeleteClick}/>

    ))}
  </div>
  </div>
  </div>
  </>
  )
}

export default Serveys