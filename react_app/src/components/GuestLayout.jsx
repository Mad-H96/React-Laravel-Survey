import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userStateContext } from '../contex/ContecProvider';

const GuestLayout = () => {


// ------------------------------------------------------------------

  const { currentUser, userToken } = userStateContext();

  if(userToken){

      return <Navigate to = "/" />

  }

// ------------------------------------------------------------------

  return (

    <>

    
  <Outlet/>

    </>
    
  )
}

export default GuestLayout