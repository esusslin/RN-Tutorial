import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
    //   authDomain: 'authentication-70a18.firebaseapp.com',
    //   databaseURL: 'https://authentication-70a18.firebaseio.com',
    //   storageBucket: 'authentication-70a18.appspot.com',
    //   messagingSenderId: '682333809338'
    // });

    firebase.initializeApp({
    apiKey: 'AIzaSyDYfU8PD1yhkKifx8awklxQAXDs7dUcC28',
    authDomain: 'authy-37cd9.firebaseapp.com',
    databaseURL: 'https://authy-37cd9.firebaseio.com',
    projectId: 'authy-37cd9',
    storageBucket: 'authy-37cd9.appspot.com',
    messagingSenderId: '337441326411'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
