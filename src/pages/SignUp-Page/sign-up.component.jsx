import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <div className="sign-up-container">
          <h1>Sign Up</h1>
          <form action="">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="text" placeholder="Phone Number" name="mobile" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            <Link to='/dashboard'>
              <button type="submit">Create account</button>
            </Link>
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