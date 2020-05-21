import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';





class App extends React.Component {
  constructor() {
  super();

  this.state= {
    currentUser: null
  };
}

unsubscribeFormAuth = null 

componentDidMount() {
  this.unsubscribeFormAuth =auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });

  });
}

componentWillUnmount() {
  this.unsubscribeFormAuth();
}


  render() {
  return (
    <div>
    <Header  currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
 }
}

export default App;