import React, { Component } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Product from './Product';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="home-container">
        <h2 className="section-title">Introduce</h2>
        <h3 className="introduce-content">
          Welcome to Read to Earn! Our platform offers a unique opportunity to earn rewards while staying updated and expanding your knowledge. Discover a wide range of engaging articles, written by industry experts, covering topics from technology to lifestyle. With a user-friendly interface, you can easily navigate and enjoy a seamless reading experience. Accumulate reward points by interacting with articles and redeem them for exciting benefits like gift Products and exclusive offers. Join us today to unlock a world of knowledge and earn rewards along the way. Happy reading with Read to Earn!
        </h3>
        
        <h2 className="section-title">Connectable wallets</h2>
        <ul className="wallet-list">
          <li className="wallet-item">Ví A</li>
          <li className="wallet-item">Ví B</li>
          <li className="wallet-item">Ví C</li>
          <li className="wallet-item">Ví D</li>
        </ul>

        <h2 className="section-title">Hướng dẫn sử dụng người dùng</h2>
        <p className="section-content">Đây là hướng dẫn sử dụng người dùng.</p>

        <h2 className="section-title">Thông tin coin được tạo</h2>
        <p className="section-content">Đây là thông tin về coin được tạo.</p>

        <h2 className="section-title">Thông tin marketplace hot</h2>
        <Product/>
        


        <Footer/>
      </div>
      </>
      
    );
  }
}

export default Home;
