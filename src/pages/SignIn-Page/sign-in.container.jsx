import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SigIn extends React.Component {
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <form action="">
            <input type="text" placeholder="Phone Number" name="mobile" />
            <input type="password" name="password" id="" />
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