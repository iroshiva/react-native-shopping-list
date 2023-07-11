import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/colors';
import TitleText from './TitleText';
import AppStyles from '../constants/AppStyles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={AppStyles.headingOne}>My Shopping List</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    padding: 20,
  },
  // headerText: {
  //   color: Colors.white,
  //   fontSize: 20,
  //   fontFamily: 'Raleway-Bold'
  // }
})

export default Header