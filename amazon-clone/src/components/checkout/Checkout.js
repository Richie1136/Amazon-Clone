import './Checkout.css'
import Subtotal from '../subtotal/Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='checkout-logo' />
        <div>
          <h2 className='checkout-title'>
            Your Shopping Cart
          </h2>
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}

        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
