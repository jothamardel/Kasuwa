import React from 'react';
import './App.css';
import HomePage from './pages/Home-page/homepage.component';
import SigIn from './pages/SignIn-Page/sign-in.container';
import SignUp from './pages/SignUp-Page/sign-up.component';
import Dashboard from './pages/Dashboard/dashboard.container';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <SigIn /> */}
      {/* <SignUp /> */}
      <Dashboard />
    </div>
  );
}

export default App;
