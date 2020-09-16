import React from 'react';
import './menu-modal.styles.scss';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';
import { unmountUser } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

const MenuModal = ({ closeModal, unmountUser }) => (
  <div className='menu-overlay'>

    <ul className='container' onClick={closeModal}>
      <Link to='/' className='link' >
        <li className='item'>Home</li>
      </Link>
      <Link to='/register' className='link'>
        <li className='item'>Register Business</li>
      </Link>
      <li className='item'>Schedule</li>
      <li className='item'>Profile</li>
      {/* <li className='item'>Loan</li> */}
      {/* <li className='item'>My Contribution</li> */}
      {/* <li className='item'>Fund Wallet</li> */}
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