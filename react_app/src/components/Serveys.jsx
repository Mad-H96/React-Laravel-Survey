import React from 'react'
import  './serveys.css'
import { userStateContext } from '../contex/ContecProvider';
import SurveyListItems from './SurveyListItems';

const Serveys = () => {

  const {surveys} = userStateContext();
  // console.log(surveys);

  return (
    <>
    <div className="main">
    <h1 className='heading'>Surveys</h1>
  <br /><br />
  <hr />

    <div className="">

    {surveys.map(survey=>(

      <SurveyListItems survey={survey} key={survey.id}/>

    ))}
  </div>
  
  </div>
  </>
  )
}

export default Serveys