import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/news" className="navbar-link">News</Link>
          </li>
          <li className="navbar-item">
            <Link to="/coin" className="navbar-link">Coin Name</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Ours</Link>
          </li>
          <li className="navbar-item">
            <Link to="/marketplace" className="navbar-link">Marketplace</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
