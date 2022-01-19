import React from 'react';
import './Orders.css';

const Orders = ({ orders, deleteOrder }) => {
  const orderEls = orders.map(order => {
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
        <button className='delete-btn' id={order.id} onClick={() => deleteOrder(order.id)}>Delete 🌯  ➡️  🗑 </button>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;
