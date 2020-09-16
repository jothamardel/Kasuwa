import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { mountUser, unmountUser } from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/Home-page/homepage.component';
import SignIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';
import MenuModal from './components/Menu-modal/menu-modal.component';
import RegisterBusiness from './pages/Register/register-business.component';
import WithSpinner from './components/With-spinner/with-spinner.component';

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (!user) return;
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot => {
        this.props.mountUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { modal: { modal, isLoading }, user: { currentUser } } = this.props;
    return (
      <div className="App">
        {
          modal ? <MenuModal /> : null
        }
        {
          isLoading ? <WithSpinner /> : null
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
  unmountUser: () => dispatch(unmountUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
