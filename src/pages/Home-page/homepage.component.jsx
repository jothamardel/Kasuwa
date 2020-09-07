import React from 'react';
import './homepage.styles.scss';


const HomePage = () => (
  <div className="home-page-container">
    <div className="description">
      <h1>Kasuwa</h1>
      <p>...empowering local businesses.</p>
      <button>Get Started</button>
    </div>
    <img src={require("../../assets/kasuwa1.png")} alt="Naira notes and a smartphone" className="home-page-img" />
  </div>
);

export default HomePage;