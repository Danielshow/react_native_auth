import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Card, CardSection, Button, Input } from "./common";;

export default class LoginForm extends Component {
  state = { email: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label= 'Email'
            placeholder={"Enter your email address"}
            contentType="emailAddress"
            value={this.state.text}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label= 'Password'
            placeholder={"Enter your password"}
            contentType="password"
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

