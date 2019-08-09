import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from './components/LoginForm';
import { Button, Spinner } from "./components/common";

class App extends Component {
  state = {
    loggedIn: null
  };

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonStyle}>
            <Button onPress={this.handleLogout } >Logout</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.loadingStyle} >
            <Spinner />
          </View>
        );
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

const styles = {
  buttonStyle: {
    marginTop: 30,
    height: 40,
  },

  loadingStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default App;
