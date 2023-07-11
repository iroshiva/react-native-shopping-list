import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleText = ({style, children}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 9,
  },
});

export default TitleText;
