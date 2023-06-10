import React, { Component } from 'react'

export default class HomeClass extends Component {
    
  render() {
    const { dishes } = this.props
    return (
        <div>
        <h2 className="list">Menu Class del restaurante </h2>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>Precio: {dish.price} €</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
