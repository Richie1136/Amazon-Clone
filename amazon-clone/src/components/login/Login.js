import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
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
          <button className='signin'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazing Fake Clone Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className='signup'>Create Account</button>
      </div>
    </div>
  )
};

export default Login;
