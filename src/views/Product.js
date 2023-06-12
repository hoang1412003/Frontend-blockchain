import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

class Product extends Component {
  runPage1 = () => {
    
  };
  render() {
    return (
      <div className="product-container">
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/2fd18c56eae16cff23bcceb119ea40af.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 1</h3>
          <p className="product-description">Author 1</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 1</p>
          <p className="product-description">Price: Money value 1</p>
          <div className="product-buttons">
          <Link to="/page1" className="product-button">View Info</Link>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/7f3f50744eb1479d1967504f9e63c32e.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 2</h3>
          <p className="product-description">Author 2</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 2</p>
          <p className="product-description">Price: Money value 2</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/32caae938576f2a6bd1cbe46472e6398.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 3</h3>
          <p className="product-description">Author 3</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 3</p>
          <p className="product-description">Price: Money value 3</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/061f90449291779af003b7e0c355836a.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 4</h3>
          <p className="product-description">Author 4</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 4</p>
          <p className="product-description">Price: Money value 4</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/64f726e03d8c3bd252375ad93e568c88.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 5</h3>
          <p className="product-description">Author 5</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 5</p>
          <p className="product-description">Price: Money value 5</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/47349c6b344b049198038f3578a013d1.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 6</h3>
          <p className="product-description">Author 6</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 6</p>
          <p className="product-description">Price: Money value 6</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/0413827095c3811cd003d8b66361c344.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 7</h3>
          <p className="product-description">Author 7</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 7</p>
          <p className="product-description">Price: Money value 7</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/ee29746af2d457acd458145009229e4d.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 8</h3>
          <p className="product-description">Author 8</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 8</p>
          <p className="product-description">Price: Money value 8</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/z4417230240343_9a2f09758117466bfd5dec451c839c8c.png'} alt="Book" className="product-image" />
          <h3 className="product-title">Name book 9</h3>
          <p className="product-description">Author 9</p>
          <p className="product-description on-sale">On sale</p>
          <p className="product-description">Coin price: Coin value 9</p>
          <p className="product-description">Price: Money value 9</p>
          <div className="product-buttons">
            <button className="product-button">View Info</button>
            <button className="product-button">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
