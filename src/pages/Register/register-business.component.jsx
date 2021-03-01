import React from 'react';
import { connect } from 'react-redux';
import { createBusinessProfileDocument } from '../../firebase/firebase.utils';
import { isLoading, closeModal } from '../../redux/modal/modal.actions';
import { getBusinessDetails } from '../../redux/user/user.actions';
import Navigation from '../../components/Navigation/navigation.component';
import './register-business.styles.scss';


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
        await businessRef.get().then(data => this.props.getBusinessDetails(data.docs[0].data()));
        this.props.closeModal();
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { user: { businessDetails } } = this.props;
    console.log(businessDetails)
    return (
      <div className='form-container'>
        <Navigation />
        {
          !businessDetails ?
            <form onSubmit={this.handleSubmit}>
              <h1>Register Business</h1>
              <input placeholder='Business Name' type="text" name='businessName' onChange={this.handleChange} />
              <input placeholder='Phone No.' type="text" name='phoneNumber' onChange={this.handleChange} />
              <input placeholder='RC Number' type="text" name='rcNumber' onChange={this.handleChange} />
              <input placeholder='Address' type="text" name='address' onChange={this.handleChange} />
              <input placeholder='City' type="text" name='city' onChange={this.handleChange} />
              <input placeholder='State' type="text" name='state' onChange={this.handleChange} />
              <button type="submit" onClick={this.props.isLoading}>Register</button>
            </form> :
            <div className='business-details'>
              <h2>Business Successfully Registered.</h2>
              <p>Business Name: {businessDetails.businessName}</p>
              <p>City: {businessDetails.city}</p>
              <p>Address: {businessDetails.address}</p>
              <p>State: {businessDetails.state}</p>
              <p>RC Number: {businessDetails.rcNumber}</p>
              <p>Longitude: {businessDetails.lng}</p>
              <p>Latitude: {businessDetails.lat}</p>
              <button>Edit</button>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  isLoading: () => dispatch(isLoading()),
  closeModal: () => dispatch(closeModal()),
  getBusinessDetails: (business) => dispatch(getBusinessDetails(business))
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterBusiness);