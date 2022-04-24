import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import products from './products';
import Store from './Components/Store/Store';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

function App() {
  const [store, setStore] = useState([])
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setStore(products)
  },[])

  useEffect(() => {
    let items = 0
    for(let i = 0; i < cart.length; i++){
      items += cart[i].quantity
    }
    setQuantity(items)
  },[cart])

  const addToCart = (product) => {
    let newCart = [...cart]
    let found = false
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].id === product.id){
        newCart[i].quantity += 1
        found = true
        break
      }
    }
    if (!found){
      newCart.push({...product, quantity: 1})
    }
    setCart(newCart)
  }

  const addQuantity = (product) => {
    let newCart = [...cart]
    let i = 0;
    let found = false;
    while(i < cart.length && !found){
      if(cart[i].id === product.id){
        found = true
        cart[i].quantity += 1
      }
      i++;
    }
    setCart(newCart)
  }

  const removeQuantity = (product) => {
    let newCart = [...cart]
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].id === product.id){
        newCart[i].quantity -= 1
        if(newCart[i].quantity === 0){
          newCart.splice(i,1)
        }
        break
      }
    }
    setCart(newCart)
  }

  return (
    <div className="App">
      <BrowserRouter basename='/Shopping-cart'>
        <Routes>
          <Route path="/" element={<Header quantity={quantity}/>}>
            <Route index element={<Home/>} />
            <Route path="/store" element={<Store handleAdd={addToCart} products={store}/>}/>
            <Route path="/cart" element={<Cart handleAddQuantity={addQuantity} handleRemoveQuantity={removeQuantity} products={cart}/>}/>
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
