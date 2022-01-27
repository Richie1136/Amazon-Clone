import './Payment.css'
import { useStateValue } from '../../store/state-context';
import CheckoutProduct from '../checkoutproducts/CheckoutProduct';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'



const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonError, setButtonError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate()


  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    // generate special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [cart]);


  console.log("The Secret is", clientSecret)

  const handleSubmit = async (event) => {
    // do all the stripe stuff
    event.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      setSucceeded(true)
      setButtonError(null)
      setProcessing(false)
      dispatch({
        type: 'EMPTY_BASKET'
      })
    })
    navigate('/orders')
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
                <button disabled={processing || isButtonDisabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {buttonError && <div>{buttonError}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Payment;
