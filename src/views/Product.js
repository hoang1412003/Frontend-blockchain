import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
} 
  runPage1 = () => {
    
  };
  
  render() {
    console.log(this.props)
    let books = this.props.books;
    return (
      
      <div className="product-container">
        {
          books.map((item)=> {
            return (
              <div className="product">
                <img src={item.img} alt="Book" className="product-image" />
                <h3 className="product-title">{item.bookName}</h3>
                <p className="product-description">{item.author}</p>
                <p className="product-description on-sale">{item.status}</p>
                <p className="product-description">{item.coinPrice}</p>
                <p className="product-description">Price: Money value 2</p>
                <div className="product-buttons">
                  <Link to="/page1" className="product-button">View Info</Link>
                  <button className="product-button">Buy Now</button>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Product;
