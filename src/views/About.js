import React, { Component } from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2 className="section-title">Thông tin đội sản xuất</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={process.env.PUBLIC_URL + '/img/members/z3724710153534_c02d27ab7cd51786128d890574b03af9.jpg'} alt="Thân Văn Hoàng" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Thân Văn Hoàng</h3>
              <p className="team-member-role">Front End</p>
              <p className="team-member-info">front-end, viết API.</p>
            </div>
          </div>
          <div className="team-member">
            <img src={process.env.PUBLIC_URL + '/img/members/z4417183483794_75c23ea10f22c6952fd139bf8991b40c.jpg'} alt="Huỳnh Đức Thành" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Huỳnh Đức Thành</h3>
              <p className="team-member-role">Leader</p>
              <p className="team-member-info">Hỗ trợ phát triển, cập nhập công nghệ cho team</p>
            </div>
          </div>
          <div className="team-member">
            <img src={process.env.PUBLIC_URL + '/img/members/z4417239505154_4ba65ed816df584a207d0419902f2bb4.jpg'} alt="Nguyễn Thiện Ngôn" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Nguyễn Thiện Ngôn</h3>
              <p className="team-member-role">Back-end</p>
              <p className="team-member-info">back-end solidity, build and smart contract.</p>
            </div>
          </div>
          <div className="team-member">
            <img src={process.env.PUBLIC_URL + '/img/members/z4417239505154_4ba65ed816df584a207d0419902f2bb4.jpg'} alt="Nguyễn Văn Toản" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Nguyễn Văn Toản</h3>
              <p className="team-member-role">Designer</p>
              <p className="team-member-info">Thiết kế giao diện và trải nghiệm người dùng.</p>
            </div>
          </div>
          <div className="team-member">
            <img src={process.env.PUBLIC_URL + '/img/members/z3724710153534_c02d27ab7cd51786128d890574b03af9.jpg'} alt="Thân Văn Hoàng" className="team-member-image" />
            <div className="team-member-details">
              <h3 className="team-member-name">Thân Văn Hoàng</h3>
              <p className="team-member-role">Front End</p>
              <p className="team-member-info">front-end, viết API.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
