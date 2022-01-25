import './Payment.css'
import { useStateValue } from '../../store/state-context';
import CheckoutProduct from '../checkoutproducts/CheckoutProduct';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';



const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonError, setButtonError] = useState(null);

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = (event) => {
    // do all the stripe stuff
    event.preventDefault()

  }

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setIsButtonDisabled(event.empty)
    setButtonError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user ? user.email : 'Guest'}</p>
            <p>54321 React Drive</p>
            <p>New York, NY 10001 </p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
            {cart.map(item => (
              <CheckoutProduct
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-details'>
            {/* Stripe info */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Payment;
