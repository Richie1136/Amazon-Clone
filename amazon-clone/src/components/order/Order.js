import './Order.css'
import moment from 'moment';
import CheckoutProduct from '../checkoutproducts/CheckoutProduct';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order-id'>
        <small>{order.id}</small>
      </p>
      {order.data.cart.map(item => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        )
      })}
    </div>
  )
};

export default Order;
