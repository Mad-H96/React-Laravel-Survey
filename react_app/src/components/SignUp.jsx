import React from 'react'
import './SignUp.css'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const SignUp = () => {
  return ( 
    <>

    <Outlet/>
    <div className="loginDiv">

        <h3 className='heading'>Sign Up Here</h3>
        <br />
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      >

      <TextField id="name" label="Your Name" variant="outlined" name='name' />
      <br />
      <TextField id="email" label="Your Email" variant="outlined" name='email' />
      <br />
      <TextField
          id="password"
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
        />
      <br /><br />
      <TextField
          id="Rpassword"
          label="Password"
          type="password"
          name='Rpassword'
          autoComplete="current-password"
        />
  
      <br />
      <Stack direction="row">
     
      <Button variant="contained">Sign Up</Button>
   
      </Stack>
   
    </Box>

    
    
</div>    


    </>
  )
}

export default SignUp