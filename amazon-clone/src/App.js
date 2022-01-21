import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Navigate, Routes, Link } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login'

function App() {
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
