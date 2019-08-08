import React from "react";
import { Text, View, TextInput } from "react-native";

const Input = ({
  label,
  placeholder,
  contentType,
  value,
  onChangeText,
  secureTextEntry
}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}> {label} </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={placeholder}
        textContentType={contentType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    width: "100%",
    paddingRight: 5,
    paddingLeft: 18,
    lineHeight: 20,
    flex: 2,
  },

  labelStyle: {
    color: "grey",
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
};

export { Input };
