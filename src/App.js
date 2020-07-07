import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from './components/Items';
import ModalWindow from './components/ModalWindow';
import Navbar from './components/Navbar';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      isModalOpen: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data,
        })
      })
  }

  onClick = (id) => {
    const {items, cart} = this.state;
    const cartItem = cart.find(item =>{
      return item.id === id
    })
    if(cartItem){
      return 
    }
    const item = items.find(item =>{
      return item.id === id
    })
    if (item) {
      this.setState({
        cart: [item, ...this.state.cart]
      })
    }
}

onItemDelete = (id) => {
  this.setState({
    cart: this.state.cart.filter(item => item.id !== id)
  })
}
onCartClick = () => {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  })
}

    render() {
      const {items} = this.state;
      return (
        <div className="App">
          <Navbar onCartClick = {this.onCartClick} itemCount = {this.state.cart.length}/>
          {this.state.isModalOpen ? 
          <ModalWindow values={this.state.cart} onItemDelete = {this.onItemDelete} /> : null
          }
          <main>
            {items.map(item => (
              <Items key={item.id} id={item.id} title={item.title} description={item.body} onAdd = {this.onClick}/>
            ))}
          </main>
          </div>
      );
    }
  }

export default App;
