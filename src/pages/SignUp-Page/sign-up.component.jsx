import React from 'react';

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
            <button type="submit">Login</button>
          </form>
          <p>Already have an account? Sign In.</p>
          <hr></hr>
          <p>or</p>
          <div className="oauth">
            <button><i class="fab fa-facebook-square"></i>Login with Facebook</button>
            <button><i class="fab fa-google"></i>Login with Google</button>
          </div>
        </div>
        <img src={require("../../assets/market_woman1.jpg")} alt="Market woman" />
      </div>
    );
  }
}

export default SignUp;