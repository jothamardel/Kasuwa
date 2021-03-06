import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { mountUser, unmountUser } from './redux/user/user.actions';
import { closeModal } from './redux/modal/modal.actions';
import HomePage from './pages/Home-page/homepage.component';
import SignIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';
import MenuModal from './components/Menu-modal/menu-modal.component';
import RegisterBusiness from './pages/Register/register-business.component';
import WithSpinner from './components/With-spinner/with-spinner.component';
import ErrorBoundary from './pages/ErrorBoundary/error-boundary.container';
import './App.css';

// const HomePage = lazy(() => import('./pages/Home-page/homepage.component'));
// const SignIn = lazy(() => import('./pages/SignIn-Page/sign-in.container'));
// const SignUp = lazy(() => import('./pages/SignUp-Page/sign-up.component'));
// const Dashboard = lazy(() => import('./pages/Dashboard/dashboard.container'));
// const MenuModal = lazy(() => import('./components/Menu-modal/menu-modal.component'));
// const RegisterBusiness = lazy(() => import('./pages/Register/register-business.component'));
// const WithSpinner = lazy(() => import('./components/With-spinner/with-spinner.component'));

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.props.mountUser(user)
      if (!user) return;
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot => {
        console.log(snapShot.data())
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
    if (isLoading) {
      setTimeout(() => this.props.closeModal(), 5000);
    }
    return (
      <div className="App">
        {/* <ErrorBoundary> */}
        {
          modal ? <MenuModal /> : null
        }
        {
          isLoading ? <WithSpinner /> : null
        }
        {/* <Suspense fallback={<div>loading...</div>}> */}
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard' /> : <HomePage />} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignIn />} />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignUp />} />
          <Route exact path='/register' render={() => !currentUser ? <Redirect to='/' /> : <RegisterBusiness />} />
          <Route exact path='/dashboard' render={() => !currentUser ? <Redirect to='/signin' /> : <Dashboard />} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}
        </Switch>
        {/* </Suspense> */}
        {/* </ErrorBoundary> */}
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
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
