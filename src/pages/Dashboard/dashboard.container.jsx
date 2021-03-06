import React, { Suspense } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './dashboard.styles.scss';
import { wallet } from '../../utlis/utils';
import { closeModal } from '../../redux/modal/modal.actions';
import Navigation from '../../components/Navigation/navigation.component';


// const WalletImage = lazy(() => <img src={require("../../assets/wallet.svg")} alt="A wallet" />);

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      fundWallet: null
    }
  }

  componentDidMount() {
    this.props.closeModal();

    axios({
      method: 'get',
      baseURL: 'https://sandboxapi.fsi.ng',
      url: '/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry?',
      params: {
        Referenceid: "01",
        RequestType: "01",
        Translocation: "01",
        ToAccount: "0037514056",
        destinationbankcode: "000001"
      },
      data: {
        Referenceid: "01",
        RequestType: "01",
        Translocation: "01",
        SessionID: "01",
        FromAccount: "01",
        ToAccount: "01",
        Amount: "01",
        DestinationBankCode: "01",
        NEResponse: "01",
        BenefiName: "01",
        PaymentReference: "01",
        OriginatorAccountName: "01",
        translocation: "01"
      },
      headers: {
        "Sandbox-Key": "86d5fc53bd71bec9cd735cc8f28799f4",
        "Ocp-Apim-Subscription-Key": "t",
        "Ocp-Apim-Trace": "true",
        "Appid": "69",
        "Content-Type": "application/json",
        "ipval": 0
      }
    })
      .then((response) => {
        console.log(response.data.data)
        this.setState({ fundWallet: response.data.data })
      })
      .catch((error) => console.log(error.message))

    // axios({
    //   method: 'post',
    //   baseURL: 'https://sandboxapi.fsi.ng',
    //   url: '/sterling/accountapi/api/Spay/InterbankTransferReq',
    //   data: {
    //     Referenceid: "0101",
    //     RequestType: "01",
    //     Translocation: "0101",
    //     SessionID: "01",
    //     FromAccount: "01",
    //     ToAccount: "01",
    //     Amount: "01",
    //     DestinationBankCode: "000001",
    //     NEResponse: "01",
    //     BenefiName: "01",
    //     PaymentReference: "01",
    //     OriginatorAccountName: "01",
    //     translocation: "01"
    //   },
    //   headers: {
    //     "Sandbox-Key": "86d5fc53bd71bec9cd735cc8f28799f4",
    //     "Ocp-Apim-Subscription-Key": "t",
    //     "Ocp-Apim-Trace": "true",
    //     "Appid": "69",
    //     "Content-Type": "application/json",
    //     "ipval": 0
    //   }
    // })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message))

  }

  render() {
    const { displayName } = this.props.user.currentUser;
    return (
      <div className="dashboard-container">
        <Navigation />
        <Suspense fallback={<div>loading...</div>}>

          <div className='user'>
            <h1>{`Welcome, ${displayName}`}</h1>
            <p>Account Number: {!this.state.fundWallet ? null : this.state.fundWallet.data.AccountNumber}</p>
            <div>
              <button>Fund Wallet</button>
            </div>
          </div>
          <div className="resource">
            <div className="wallet">
              <img src={require("../../assets/wallet.svg")} alt="A wallet" />
              <p>Wallet: </p>
              <strong>
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