import React from 'react';
import Navigation from '../../components/Navigation/navigation.component';
import './register-business.styles.scss';


class RegisterBusiness extends React.Component {
  render() {
    return (
      <div className='form-container'>
        <Navigation />
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}


export default RegisterBusiness;