import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  unsubscribeFromAuth = false;
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, phoneNumber, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName, phoneNumber });
      if (this.unsubscribeFromAuth) {
        this.setState({
          displayName: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = true;
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = false;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <div className="sign-up-container">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="displayName" placeholder="Full Name" onChange={this.handleChange} />
            <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={this.handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} />
            {/* <Link to='/dashboard'> */}
            <button type="submit">Create account</button>
            {/* </Link> */}
          </form>
          <Link to='/signin'>
            <p>Already have an account? Sign In.</p>
          </Link>
          <hr></hr>
          <p>or</p>
          <div className="oauth">
            <button onClick={signInWithFacebook}><i className="fab fa-facebook-square"></i>Login with Facebook</button>
            <button onClick={signInWithGoogle}><i className="fab fa-google"></i>Login with Google</button>
          </div>
        </div>
        <img src={require("../../assets/market_woman1.jpg")} alt="Market woman" />
      </div>
    );
  }
}

export default SignUp;