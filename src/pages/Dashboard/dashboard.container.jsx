import React from 'react';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../../redux/modal/modal.actions';
import './dashboard.styles.scss';
import { unmountUser } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';



class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <nav>
          <div className='mobile' onClick={this.props.showModal}>
            <div className='line' />
            <div className='line' />
            <div className='line' />
          </div>
          <p>Kasuwa</p>
          <ul>
            <li>Register business</li>
            <li>My Contributions</li>
            <li>Profile</li>
            <li onClick={() => {
              this.props.unmountUser()
              auth.signOut()
            }}>Logout</li>
          </ul>
        </nav>
        <div className='user'>
          <h1>{`Welcome, ${this.props.user.currentUser.name}`}</h1>
          <div>
            <button>Fund Wallet</button>
          </div>
        </div>
        <div className="resource">
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
            <p>Contribution pool:</p><strong>NGN 1,000, 000.00</strong>
          </div>
        </div>
        {/* <img src={require("../../assets/kasuwa1.png")} alt="Naira notes with smartphone" className="image" /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal()),
  closeModal: () => dispatch(closeModal()),
  unmountUser: () => dispatch(unmountUser())
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);