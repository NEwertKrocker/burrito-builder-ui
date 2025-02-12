import React, { Component } from 'react';

class OrderForm extends Component {
  constructor({ addNewOrder }) {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleIngredientChange = e => {
    e.preventDefault();
    if(!this.state.ingredients.includes(e.target.name)){
      let newIngredient = e.target.name;
      this.setState({ ingredients: [...this.state.ingredients, newIngredient] })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name && this.state.ingredients.length){
      let order = { name: this.state.name, ingredients: this.state.ingredients }
      this.props.addNewOrder(order)
    }
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className='submit-btn' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
