import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder, dropOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  }

  addNewOrder = (order) => {
    postOrder(order)
      .then(data => this.setState({ orders: [...this.state.orders, data]}))
  }

  deleteOrder = (id) => {
    dropOrder(id)
      .then(this.forceUpdate())
  }

  componentDidMount() {
    getOrders()
      .then(data => this.setState({ orders: data.orders }))
      .catch(err => console.error('Error fetching:', err));
  }

  componentDidUpdate() {
    getOrders()
      .then(data => this.setState({ orders: data.orders }))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addNewOrder={this.addNewOrder} />
        </header>

        <Orders orders={this.state.orders} deleteOrder={this.deleteOrder}/>
      </main>
    );
  }
}


export default App;
