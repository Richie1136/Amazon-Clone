import { useStateValue } from '../../store/state-context'
import './Product.css'

const Product = ({ title, price, image, rating, id }) => {
  const [{ cart }, dispatch] = useStateValue()

  console.log("This is the cart", cart)

  const addToCart = () => {
    // dispatch item into Data
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id, title, image, rating, price
      }
    })
  }
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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
