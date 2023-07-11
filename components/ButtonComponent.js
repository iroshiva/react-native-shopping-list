import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonComponent = ({ children, handleClick, style }) => {
  return (
    <Pressable onPress={handleClick}>
      <View style={{...styles.btn, ...style}}>
        <Text style={styles.textButton}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "black",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default ButtonComponent;
