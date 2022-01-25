import './Payment.css'
import { useStateValue } from '../../store/state-context';
import CheckoutProduct from '../checkoutproducts/CheckoutProduct';


const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue()

  return (
    <div className='payment'>
      <div className='payment-container'>
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

        </div>
        {/* Payment Section - Delivery address */}

        {/* Payment Section - Review Items  */}

        {/* Payment Section - Payment Method   */}

      </div>
    </div>
  )
};

export default Payment;
