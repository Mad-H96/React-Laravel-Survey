import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './defult.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { userStateContext } from '../contex/ContecProvider';

const DefaultLayout = () => {

// ------------------------------------------------------------------

  const { currentUser, userToken } = userStateContext();


  if(!userToken){

      return <Navigate to = "/login" />

  }
  
// ------------------------------------------------------------------

  return (

    <>
 <Navbar bg="dark" data-bs-theme="dark">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/" className="link">Dashboard</Nav.Link>
            <Nav.Link href="/servey"  className="link">Surveys</Nav.Link>
            <Nav.Link href="#"  className="link"><LogoutIcon/></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

    </Navbar>
    <input type="hidden" name={currentUser.name} />
     <Outlet/>
    </>
   
  )
}

export default DefaultLayout