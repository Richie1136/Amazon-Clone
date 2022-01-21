import './CheckoutProduct.css'
import { useStateValue } from '../../store/state-context'


const CheckoutProduct = ({ image, title, price, rating, id }) => {

  const [{ cart }, dispatch] = useStateValue()


  const removeFromCart = () => {
    // remove item from Cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkout-image' src={image} alt='productImage' />
      <div className='checkout-info'>
        <p className='checkout-title'>{title}</p>
        <p className='checkout-price'>
          <small>$</small>
          <b>{price}</b>
        </p>
        <p className='checkout-rating'>
          {Array(rating).fill().map((_, i) => (
            <p>⭐️</p>
          ))}
        </p>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
};

export default CheckoutProduct;
