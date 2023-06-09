import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/img/books/2fd18c56eae16cff23bcceb119ea40af.jpg'} alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
        <div className="product">
          <img src="path_to_image.jpg" alt="Book" className="product-image" />
          <h3 className="product-title">Tên Sách</h3>
          <p className="product-description">Giới thiệu về sách</p>
          <button className="product-button">Xem chi tiết</button>
        </div>
      </div>
    );
  }
}

export default Product;
