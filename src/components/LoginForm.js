import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Card, CardSection, Button, Input } from "./common";;

export default class LoginForm extends Component {
  state = { 
    email: "",
    password: ""
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            label= 'Email'
            placeholder={"Enter your email address"}
            contentType="emailAddress"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label= 'Password'
            placeholder={"Enter your password"}
            contentType="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

