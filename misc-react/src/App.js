import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';

class App extends Component{
   render(){
      return(
         <div>  
            <Navbar></Navbar>
         </div>
      );
   }
}
export default App;