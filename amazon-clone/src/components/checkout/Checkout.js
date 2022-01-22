import './Checkout.css'
import Subtotal from '../subtotal/Subtotal'
import CheckoutProduct from '../checkoutproducts/CheckoutProduct'
import { useStateValue } from '../../store/state-context'


const Checkout = () => {

  const [{ cart, user }, dispatch] = useStateValue()


  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='checkout-logo' />
        <div>
          <h3>Hello, {user ? user.email : 'Guest'}</h3>
          <h2 className='checkout-title'>
            Your Shopping Cart
          </h2>
          {cart.map((item) => {
            return <CheckoutProduct
              key={item.id}
              title={item.title}
              id={item.id}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          })}
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout