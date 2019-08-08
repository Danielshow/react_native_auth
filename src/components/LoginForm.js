import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Card, CardSection, Button } from "./common";;

export default class LoginForm extends Component {
  state = { email: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Enter your email address"}
            textContentType="emailAddress"
            value={this.state.text}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Enter your password"}
            textContentType="password"
            inp
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    width: "100%",
    height: 30,
  },
};;
