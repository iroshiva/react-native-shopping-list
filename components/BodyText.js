import { Text } from "react-native";
import React from "react";
import AppStyles from "../constants/AppStyles";

const { textBody } = AppStyles;

const BodyText = ({style, children}) => {
  return <Text style={{...textBody, ...style}}>{children}</Text>;
};

export default BodyText;
