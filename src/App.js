import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from './components/LoginForm';


class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCeR5o-QBuYH224xi2rKzJG7_OYrtti6y0',
      authDomain: 'authentication-404f3.firebaseapp.com',
      databaseURL: 'https://authentication-404f3.firebaseio.com',
      projectId: 'authentication-404f3',
      storageBucket: 'authentication-404f3.appspot.com',
      messagingSenderId: '137785591211',
      appId: '1:137785591211:web:32f103fdbde0ec26',
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
