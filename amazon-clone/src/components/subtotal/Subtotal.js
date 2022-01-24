import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../store/state-context';
import { getCartTotal } from '../../reducer';



const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue()
  console.log(cart)


  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
};

export default Subtotal;
