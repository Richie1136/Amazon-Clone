import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Navigate, Routes, Link } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
