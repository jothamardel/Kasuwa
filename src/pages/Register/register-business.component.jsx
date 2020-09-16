import React from 'react';
import { createBusinessProfileDocument } from '../../firebase/firebase.utils';
import Navigation from '../../components/Navigation/navigation.component';
import './register-business.styles.scss';
import { connect } from 'react-redux';


class RegisterBusiness extends React.Component {
  constructor() {
    super();
    this.state = {
      businessName: '',
      phoneNumber: '',
      rcNumber: '',
      address: '',
      city: '',
      state: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { currentUser: { id } } = this.props.user;
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition(async (success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        const businessRef = await createBusinessProfileDocument(id, { lat, lng, ...this.state });
        await businessRef.get().then(data => console.log(data.docs[0].data()));
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className='form-container'>
        <Navigation />
        <form onSubmit={this.handleSubmit}>
          <h1>Register Business</h1>
          <input placeholder='Business Name' type="text" name='businessName' onChange={this.handleChange} />
          <input placeholder='Phone No.' type="text" name='phoneNumber' onChange={this.handleChange} />
          <input placeholder='RC Number' type="text" name='rcNumber' onChange={this.handleChange} />
          <input placeholder='Address' type="text" name='address' onChange={this.handleChange} />
          <input placeholder='City' type="text" name='city' onChange={this.handleChange} />
          <input placeholder='State' type="text" name='state' onChange={this.handleChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps)(RegisterBusiness);