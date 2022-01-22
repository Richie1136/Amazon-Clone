import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { auth } from '../../firebase'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const signin = (event) => {
    event.preventDefault()
  }

  const signup = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate('/')
        }
      }).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon' />
      </Link>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' onChange={onEmailChange} value={email} />
          <h5>Password</h5>
          <input type='password' onChange={onPasswordChange} value={password} />
          <button type='submit' onClick={signin} className='signin'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazing Fake Clone Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={signup} type='submit' className='signup'>Create Account</button>
      </div>
    </div>
  )
};

export default Login;
