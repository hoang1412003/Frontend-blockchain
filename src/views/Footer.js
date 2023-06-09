import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="group-name">Tên nhóm</div>
        <a href="link_contract" className="contract-link">Liên kết hợp đồng</a>
        
      </footer>
    );
  }
}

export default Footer;
