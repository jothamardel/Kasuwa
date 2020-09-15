import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { mountUser, unmountUser } from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/Home-page/homepage.component';
import SignIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';
import MenuModal from './components/Menu-modal/menu-modal.component';
import RegisterBusiness from './pages/Register/register-business.component';

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (!user) return;
      this.props.mountUser({ name: user.displayName, email: user.email, mobile: user.phoneNumber });
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { modal: { modal }, user: { currentUser } } = this.props;
    return (
      <div className="App">
        {
          modal ? <MenuModal /> : null
        }
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard' /> : <HomePage />} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignIn />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignUp />} />
          <Route exact path='/register' render={() => !currentUser ? <Redirect to='/' /> : <RegisterBusiness />} />
          <Route exact path='/dashboard' render={() => !currentUser ? <Redirect to='/signin' /> : <Dashboard />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  mountUser: (user) => dispatch(mountUser(user)),
  unmountUser: () => dispatch(unmountUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
