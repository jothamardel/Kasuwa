import React from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SigIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, password)

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" name="email" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            <button type="submit">Login</button>
          </form>
          <Link to='/signup'>
            <p>Don't have an account? Sign Up.</p>
          </Link>
          <hr></hr>
          <p>or</p>
          <div className="oauth">
            <Link to='/dashboard'>
              <button onClick={signInWithFacebook}><i className="fab fa-facebook-square"></i>Login with Facebook</button>
              <button onClick={signInWithGoogle}><i className="fab fa-google"></i>Login with Google</button>
            </Link>
          </div>
        </div>
        <img src={require("../../assets/market_woman1.jpg")} alt="Market woman" />
      </div>
    );
  }
}


export default SigIn;