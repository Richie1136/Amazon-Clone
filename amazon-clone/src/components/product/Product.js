import React from 'react'
import './Product.css'

const Product = ({ title, price, image, rating }) => {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <b>{price}</b>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_, i) => (
            <p>⭐️</p>
          ))}
        </div>
      </div>
      <img src={image} alt='book' />
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
