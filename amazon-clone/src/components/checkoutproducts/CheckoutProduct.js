import './CheckoutProduct.css'
import { useStateValue } from '../../store/state-context'


const CheckoutProduct = ({ image, title, price, rating, id }) => {

  const [{ cart }, dispatch] = useStateValue()


  // const removeFromCart = () => {
  //   // dispatch item into Data
  //   dispatch({
  //     type: 'REMOVE_FROM_CART',
  //     item: {
  //       id, title, image, rating, price
  //     }
  //   })
  // }

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
        <button>Remove from Cart</button>
      </div>
      {/* <button onClick={removeFromCart}>Remove from Cart</button> */}
    </div>
  )
};

export default CheckoutProduct;
