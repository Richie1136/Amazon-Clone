import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './store/state-context'
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/orders/Orders'


const promise = loadStripe('pk_test_51KLuaGKANSeUz9RclNMDh7lxper4yAnHgOBCAPH7RDebVw59Z3lO8pzhM6oOYUxC58Z4Rz8AEO0aq40xNpY7haI100JBPoHsj8')



function App() {
  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    // listener when the app loads and is always listening
    auth.onAuthStateChanged(authUser => {
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
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<><Header />, <Home /></>} />
        <Route path='/checkout' element={<><Header />, <Checkout /></>} />
        <Route path='/orders' element={<><Header />, <Orders /></>} />
        <Route path='/payment' element={<><Header />, <Elements stripe={promise}><Payment /></Elements></>} />

      </Routes>
    </div>
  );
}

export default App;
