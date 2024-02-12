import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './defult.css';
import LogoutIcon from '@mui/icons-material/Logout';

const DefaultLayout = () => {
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
     <Outlet/>
    </>
   
  )
}

export default DefaultLayout