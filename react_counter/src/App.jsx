import { useState } from 'react'
import './App.css'
import IncrementCounter from './components/IncrementCounter/incrementCounter';
import DecrementCounter from './components/DecrementCounter/DecrementCounter';
import Greeting from './components/GreetingFunc/greetingFunc';



function App() {


  return (
    <div>
      <h2>Contador de incremento</h2>
      <IncrementCounter initialValue={10} incrementBy={2} />

      <h2>Contador de decremento</h2>
      <DecrementCounter initialValue={20} decrementBy={3} />
      
      <Greeting favoriteName="Euralio"/>
    </div>
  );
}


export default App
