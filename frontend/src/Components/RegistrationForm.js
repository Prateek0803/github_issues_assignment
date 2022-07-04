import React,{useState} from 'react'
import axios            from 'axios'
import { Button }       from 'reactstrap'
import { Navigate }     from 'react-router-dom'
import '../styles/registration.css'

const RegistrationForm = () => {
  const [email,setEmail]            = useState('')
  const [password,setPassword]      = useState('')
  const [name,setName]              = useState('')
  const [registered,setRegistered]  = useState(false)

  const formOnSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/auth/register',{
          name      : name,
          email     : email,
          password  : password
    })
    .then((response) =>{
      setRegistered(true)
      console.log(response)
    })
    .catch((err) =>{
      setRegistered(false)
      console.log(err)
    })
  }


  return (
    <div className='registration_form_container'>
            <h3>Register to Github</h3>
        <form className='registration_card'>
            <label>Email</label>
            <input 
                type='email'
                placeholder='Enter your mail'
                id='email'
                className='register_input'
                value={email}
                onChange = {(e)=> setEmail(e.target.value)}
            />
            <label>Username</label>
             <input 
                type='username'
                placeholder='Enter your name'
                id='email'
                className='register_input'
                value={name}
                onChange = {(e)=> setName(e.target.value)}
            />
            <label>Password</label>
             <input 
                type='password'
                placeholder='Create your password'
                id='email'
                className='register_input'
                value={password}
                onChange = {(e)=> setPassword(e.target.value)}
            />
            <Button type='submit' onClick={(e) => formOnSubmit(e)} className='register_button'>Register</Button>
            {registered === true && <Navigate to="/login" />}
        </form>
    </div>
  )
}

export default RegistrationForm
