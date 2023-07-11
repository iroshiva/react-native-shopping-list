import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../constants/colors";

const InputComponent = (props) => {
  return (
    <TextInput
      // forward props
      {...props}
      style={{...styles.input, ...props.style}}
      placeholder={props.textPlaceholder}
      value={props.value}
      onChangeText={props.onChangeHandler}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 50,
    marginVertical: 5,
  },
});

export default InputComponent;
