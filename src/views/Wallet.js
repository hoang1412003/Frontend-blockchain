import React, { Component } from 'react';
import './Wallet.css';

class Wallet extends Component {
  render() {
    return (
      <div className="wallet-container">
        <h2 className="wallet-title">Wallet we support</h2>
        <div className="wallet-frame">
          <div className="wallet-child">
            <div className="wallet-child-image">
              <img src={process.env.PUBLIC_URL + '/img/wallet/MetaMask_Fox.svg.png'} alt="Ví 1" />
            </div>
            <div className="wallet-child-title">Meta mask</div>
          </div>
        </div>
        <div className="wallet-frame">
          <div className="wallet-child">
            <div className="wallet-child-image">
              <img src={process.env.PUBLIC_URL + '/img/wallet/cover.jpg'} alt="Ví 2" />
            </div>
            <div className="wallet-child-title">Trust wallet</div>
          </div>
        </div>
        <div className="wallet-frame">
          <div className="wallet-child">
            <div className="wallet-child-image">
              <img src={process.env.PUBLIC_URL + '/img/wallet/9E4A3983-4691-4BFB-9FA1-7FC3E5100874.jpeg'} alt="Ví 3" />
            </div>
            <div className="wallet-child-title">Binance</div>
          </div>
        </div>
        <div className="wallet-frame">
          <div className="wallet-child">
            <div className="wallet-child-image">
              <img src={process.env.PUBLIC_URL + '/img/wallet/coinbase-logo-350x350.webp'} alt="Ví 4" />
            </div>
            <div className="wallet-child-title">Coinbase</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
