import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from './components/Items';
import ModalWindow from './components/ModalWindow';
import Navbar from './components/Navbar';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setItems(data)
      })
  }, []);

  const onClick = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      return
    }
    const item = items.find(item => {
      return item.id === id
    })
    if (item) {
      setCart([item, ...cart])
    }
  }

  const handleItemDelete = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const handleCartClick = () => {
    setIsModalOpen(!isModalOpen)
  }



  return (
    <div className="App">
      <Navbar onCartClick={handleCartClick} itemCount={cart.length} />
      {isModalOpen ?
        <ModalWindow values={cart} onItemDelete={handleItemDelete} /> : null
      }
      <main>
        {items.map(item => (
          <Items key={item.id} id={item.id} title={item.title} description={item.body} onAdd={onClick} />
        ))}
      </main>
    </div>
  );
}


export default App;
