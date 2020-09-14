import React from 'react';
import { connect } from 'react-redux';
import './dashboard.styles.scss';
import { wallet } from '../../utlis/utils';
import Navigation from '../../components/Navigation/navigation.component';



class Dashboard extends React.Component {
  render() {
    const { name } = this.props.user.currentUser;
    return (
      <div className="dashboard-container">
        <Navigation />
        <div className='user'>
          <h1>{`Welcome, ${name}`}</h1>
          <div>
            <button>Fund Wallet</button>
          </div>
        </div>
        <div className="resource">
          <div className="wallet">
            <img src={require("../../assets/wallet.svg")} alt="A wallet" />
            <p>Wallet: </p><strong>
              {
                `NGN ${wallet.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)}`
              }
            </strong>
          </div>
          <div className="loan">
            <img src={require("../../assets/vault.svg")} alt="A vault" />
            <p>Accessible loan: </p><strong>NGN 5,000.00</strong>
          </div>
          <div className="pool">
            <img src={require("../../assets/credit_card.svg")} alt="A credit card" />
            <p>Contribution pool:</p><strong>NGN 1,000, 000.00</strong>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});



export default connect(mapStateToProps,)(Dashboard);