import './Orders.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { useStateValue } from '../../store/state-context';



const Orders = () => {

  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection('users').doc(user?.uid)
      .collection('orders').orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, []);


  return (
    <div className='orders'>
      <h1>Your Orders</h1>
    </div>
  )
};

export default Orders;
