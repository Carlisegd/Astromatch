import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Contatos from './pages/Contatos';


class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/contatos" element ={<Contatos />} />
            </Routes>
          </BrowserRouter> 
        );
    }
}

export default RoutesApp;