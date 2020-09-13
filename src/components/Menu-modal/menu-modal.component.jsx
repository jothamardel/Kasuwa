import React from 'react';
import './menu-modal.styles.scss';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';
import { unmountUser } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';

const MenuModal = ({ closeModal, unmountUser }) => (
  <div className='menu-overlay'>

    <ul className='container'>
      <li className='item'>Home</li>
      <li className='item'>Register Business</li>
      <li className='item'>Profile</li>
      <li className='item'>Loan</li>
      <li className='item'>My Contribution</li>
      <li className='item'>Fund Wallet</li>
      <li className='item' onClick={() => {
        unmountUser()
        closeModal()
        auth.signOut()
      }}>Logout</li>
    </ul>
    <div onClick={closeModal} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  unmountUser: () => dispatch(unmountUser())
});

export default connect(null, mapDispatchToProps)(MenuModal);