import React from "react";
import { Text, View } from "react-native";

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 25,
    color: '#fff'
  },

  viewStyle: {
    backgroundColor: "#039BE5",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

export { Header };
