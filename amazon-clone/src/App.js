import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Navigate, Routes, Link } from 'react-router-dom'
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/checkout' element={<><Header /><Cart /></>} />
      </Routes>
    </div>
  );
}

export default App;
