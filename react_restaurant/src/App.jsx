import React, { useState } from 'react';
import './App.css'
import HeaderFunct from './components/HeaderFunct/headerFunct';
import HomeFunct from './components/HomeFunct/homeFunct';
import HeaderClass from './components/HeaderClass/headerClass';
import HomeClass from './components/HomeClass/homeClass';



function App() {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15
    }
  ];

  return (
    <div>
      <HeaderFunct />
      <HomeFunct dishes={dishes} />
      <HeaderClass />
      <HomeClass dishes={dishes} />
    </div>
  )
}

export default App
