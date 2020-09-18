import React, { Suspense } from 'react';
import Flutterwave from 'flutterwave-node-v3';
import { connect } from 'react-redux';
import './dashboard.styles.scss';
import { wallet } from '../../utlis/utils';
import { closeModal } from '../../redux/modal/modal.actions';
import Navigation from '../../components/Navigation/navigation.component';


// const WalletImage = lazy(() => <img src={require("../../assets/wallet.svg")} alt="A wallet" />);

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.closeModal();
    const flw = new Flutterwave(process.env.REACT_APP_FLW_PUB_KEY, process.env.REACT_APP_FLW_SECRET_KEY);
    const charge_ng_acct = async () => {

      try {

        const payload = {
          "tx_ref": `${this.props.user.currentUser.id}`, //This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
          "amount": "100", //This is the amount to be charged.
          "account_bank": "011", //This is the Bank numeric code. You can get a list of supported banks and their respective codes Here: https://developer.flutterwave.com/v3.0/reference#get-all-banks
          "account_number": "3039094800",
          "currency": "NGN",
          "email": "ardelmbiplang@gmail.com",
          "phone_number": "07033680280", //This is the phone number linked to the customer's mobile money account
          "fullname": "Ardel Mbiplang Nathaniel"
        }

        const response = await flw.Charge.ng(payload)
        console.log(response);
      } catch (error) {
        console.log(error)
      }

    }


    charge_ng_acct();
  }
  render() {
    const { displayName } = this.props.user.currentUser;
    return (
      <div className="dashboard-container">
        <Navigation />
        <Suspense fallback={<div>loading...</div>}>

          <div className='user'>
            <h1>{`Welcome, ${displayName}`}</h1>
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
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);