import { StyleSheet } from "react-native";
import Colors from './colors';

export default StyleSheet.create({
  headingOne: {
    fontFamily: "Raleway-Bold",
    color: Colors.white,
    fontSize: 30,
    // padding: 9,
  },
  headerTwo: {
    fontFamily: "Raleway-Bold",
    color: Colors.red,
    fontSize: 20,
    padding: 5,
    textAlign: "center",
  },
  textBody: {
    color: Colors.grey,
    fontSize: 19,
    marginBottom: 30,
  }
})