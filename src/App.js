import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home-page/homepage.component';
import SigIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';

function App() {
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

export default App;
