import React, { Component } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Product from './Product';
import Footer from './Footer';
import Wallet from './Wallet'
import { getBalance } from '../service/blockChainService';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: null,
    };
} 
async componentDidMount() {
  try {
    const money = await getBalance();
    this.setState({ money });
  } catch (error) {
    console.error(error);
  }
}
  render() {
    return (
      <>
      <Navbar/>
      <div className="home-container">
        <h2 className="section-title">Introduce</h2>
        <h3 className="introduce-content">
          Welcome to Read to Earn! Our platform offers a unique opportunity to earn rewards while staying updated and expanding your knowledge. Discover a wide range of engaging articles, written by industry experts, covering topics from technology to lifestyle. With a user-friendly interface, you can easily navigate and enjoy a seamless reading experience. Accumulate reward points by interacting with articles and redeem them for exciting benefits like gift Products and exclusive offers. Join us today to unlock a world of knowledge and earn rewards along the way. Happy reading with Read to Earn!
        </h3>

        <h2 className="section-title">Hướng dẫn sử dụng người dùng</h2>
        <p className="section-content">Đây là hướng dẫn sử dụng người dùng.</p>

        <h2 className="section-title">Thông tin marketplace hot</h2>
        <div>
          {this.state.money}
        </div>
        <Product/>
        
        <Wallet/>

        <Footer/>
      </div>
      </>
      
    );
  }
}

export default Home;
