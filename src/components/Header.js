// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Manpur Haat</h1>
    <nav>
      <Link to="/">Home</Link> 
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;