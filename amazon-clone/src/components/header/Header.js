import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon' />
      </Link>
      {/* logo */}
      <div className='header-search'>
        <input className='searchInput' tyoe='text' />
        <SearchIcon className='logo' />
      </div>
      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-option-lineone'>Hello Guest</span>
          <span className='header-option-linetwo'>Sign in</span>
        </div>
        <div className='header-option'>
          <span className='header-option-lineone'>Returns</span>
          <span className='header-option-linetwo'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-lineone'>Your</span>
          <span className='header-option-linetwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header-cart'>
            <ShoppingCartIcon className='cart' alt='shopping' />
            <span className='header-option-linetwo header-cartCount'>0</span>
          </div>
        </Link>
      </div>
      {/* searchbar */}
      {/* search icon */}
      {/* text */}
      {/* text */}
      {/* text */}
      {/* text */}
      {/* cart */}
    </div>
  )
}

export default Header
