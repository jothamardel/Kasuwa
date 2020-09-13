import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { mountUser, unmountUser } from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/Home-page/homepage.component';
import SigIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.mountUser({ name: user.displayName, email: user.email, mobile: user.phoneNumber });
      console.log(user)
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SigIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  mountUser: (user) => dispatch(mountUser(user)),
  unmountUser: () => dispatch(unmountUser())
});

export default connect(null, mapDispatchToProps)(App);
