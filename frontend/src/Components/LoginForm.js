import React,{useState}                 from 'react'
import axios                            from 'axios'
import {Link, Navigate}                 from 'react-router-dom'
import { Button }                       from 'reactstrap'
import '../styles/login.css'

const LoginForm = () => {
  const [email,setEmail]        = useState('')
  const [response,setResponse]  = useState(false)
  const [password,setPassword]  = useState('')

  const formSubmit = (e)=>{
    e.preventDefault()
    console.log({email , password})
    axios.post('http://localhost:5000/auth/login',{
      email : email,
      password : password   
    })
    .then((data) => {
      setResponse(true)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
      alert('Wrong credentials!!')
      setResponse(false)
    })
  }


  return (
    <div className='login_form_container'>
        <h3>Sign in to Github</h3>
        <form className='login_card'>
            <input 
                type='email'
                placeholder='Enter your mail'
                id='email'
                className='login_input'
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />
             <input 
                type='password'
                placeholder='Enter your password'
                id='password'
                className='login_input'
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            <Button style={{marginTop : '1rem'}} type='submit' onClick={(e) => formSubmit(e)} className='login_button'>Login</Button>
            <p style={{marginTop : '0.5rem'}}>New user? <Link to ="/register" style={{color : 'lightblue', textDecoration : 'none'}}>Register here</Link></p>
            {
              response === true && <Navigate replace to ="/" />
            }
        </form>
    </div>
  )
}

export default LoginForm
