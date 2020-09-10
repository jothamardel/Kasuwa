import React from 'react';

import './dashboard.styles.scss';



class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <nav>
          <div></div>
          <p>Welcome, Bashir Sheidu</p>
        </nav>
        <div className="resource">
          {/* <div>
            <button>Fund Wallet</button>
          </div> */}
          <div className="wallet">
            <img src={require("../../assets/wallet.svg")} alt="A wallet" />
            <p>Wallet: </p><strong>NGN 1,000.00</strong>
          </div>
          <div className="loan">
            <img src={require("../../assets/vault.svg")} alt="A vault" />
            <p>Accessible loan: </p><strong>NGN 5,000.00</strong>
          </div>
          <div className="pool">
            <img src={require("../../assets/credit_card.svg")} alt="A credit card" />
            <p>Cont. pool:</p><strong>NGN 1,000, 000.00</strong>
          </div>
        </div>
        <img src={require("../../assets/kasuwa1.png")} alt="Naira notes with smartphone" className="image" />
      </div>
    );
  }
}

export default Dashboard;