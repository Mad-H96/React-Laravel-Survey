import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import mainImg from '../assets/main.jpg'

const LoginForm = () => {
  return (
    <>


    <div className="loginDiv">

        <h3 className='heading'>Sign in to your account</h3>
        <br />
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="email" label="Your Email" variant="outlined" name='email' />
      <br />
      <TextField id="password" name='password' label="Your Password" variant="outlined" />
      <br /><br />
      <Link className='links' to={`/signup`}>Forgot Your Password?</Link>
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