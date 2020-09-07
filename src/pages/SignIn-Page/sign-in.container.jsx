import React from 'react';


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
          <p>Don't have an account? Sign Up.</p>
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

export default SigIn;