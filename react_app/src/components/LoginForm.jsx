import React from 'react'
import './login.css'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const LoginForm = () => {
  return (
    <>

    <div className="loginDiv" >

        <h3 className='heading2'>Sign in to your account</h3>
        <br />
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '41ch' },
      }}
      noValidate
      autoComplete="off"
      >
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
      <Link className='links' to={`#`}>Forgot Your Password?</Link>
      <br />
      <Link className='links' to={`/signup`}>Sign Up Here</Link>
      <br />
      <br />
      <Stack direction="row">
     
      <Button variant="contained">Sign In</Button>
   
      </Stack>
   
    </Box>

    
    
</div>    

    </>
  )
}

export default LoginForm