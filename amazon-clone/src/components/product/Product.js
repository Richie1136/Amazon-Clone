import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>The lean startup</p>
        <p className='product-price'>
          <small>$</small>
          <b>11.99</b>
        </p>
        <div className='product-rating'>
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
      </div>
      <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_5Y400_.jpg' alt='book' />
    </div>
  )
}

export default Product
