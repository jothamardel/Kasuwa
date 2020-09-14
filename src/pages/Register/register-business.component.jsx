import React from 'react';
import Navigation from '../../components/Navigation/navigation.component';
import './register-business.styles.scss';


class RegisterBusiness extends React.Component {
  render() {
    return (
      <div className='form-container'>
        <Navigation />
        <form action="">
          <h1>Register Business</h1>
          <input placeholder='Business Name' type="text" />
          <input placeholder='Phone No.' type="text" />
          <input placeholder='' type="text" />
          <input placeholder='' type="text" />
          <input placeholder='' type="text" />
          <input placeholder='' type="text" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}


export default RegisterBusiness;