import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({
      error: " ",
      loading: true
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.onLoginSuccess();
          })
          .catch(() => {
            this.onLoginFail();
          });
      });
  };

  onLoginSuccess = () => {
    this.setState({
      error: " ",
      loading: false,
      email: '',
      password: ''
    });
  };

  onLoginFail = () => {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            label="Email"
            placeholder={'Enter your email address'}
            contentType="emailAddress"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder={'Enter your password'}
            contentType="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          {this.state.loading == true ? (
            <Spinner size="small" />
          ) : (
            <Button onPress={this.onButtonPress}>Login</Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 18,
    alignSelf: "center",
    color: "red",
    marginTop: 5
  },
};
