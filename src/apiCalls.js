export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method:'POST',
    body: JSON.stringify({
      name: order.name,
      ingredients: order.ingredients,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(response => response.json())
}

export const dropOrder = (id) => {
  return fetch(`http://localhost:3001/api/v1/orders/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(response => console.log(response))
}
