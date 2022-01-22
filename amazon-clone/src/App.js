import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Navigate, Routes, Link } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './store/state-context'



function App() {
  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    // listener when the app loads and is always listening
    auth.onAuthStateChanged(authUser => {
      console.log('The user is', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        // the user just logged in / or was logged in
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<><Header />, <Home /></>} />
        <Route path='/checkout' element={<><Header />, <Checkout /></>} />
      </Routes>
    </div>
  );
}

export default App;
