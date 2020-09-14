import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import { showModal } from '../../redux/modal/modal.actions';
import { unmountUser } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';


const Navigation = ({ showModal, unmountUser }) => (
  <nav>
    <div className='mobile' onClick={showModal}>
      <div className='line' />
      <div className='line' />
      <div className='line' />
    </div>
    <Link to='/' className='link'>
      <p>Kasuwa</p>
    </Link>
    <ul>
      <Link to="/register" className='link'>
        <li>Register business</li>
      </Link>
      <li>My Contributions</li>
      <li>Profile</li>
      <li onClick={() => {
        unmountUser()
        auth.signOut()
      }}>Logout</li>
    </ul>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal()),
  unmountUser: () => dispatch(unmountUser())
});

export default connect(null, mapDispatchToProps)(Navigation);