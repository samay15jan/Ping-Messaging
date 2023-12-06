import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import Styles from '../css/Styles';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.welcomePage_Logo}
        source={require('../../assets/logo.gif')}
      />
      <Text
        style={Styles.welcomePage_Caption}
      >
        A modern way of saying 'Hi'
      </Text>
      <Pressable
        style={Styles.welcomePage_Button}
        onPress={() => navigation.navigate('AuthScreen')}
      >
        <Text
          style={Styles.welcomePage_Button_Text}
        >
          Continue
        </Text>
      </Pressable>
      <Text
        style={Styles.welcomePage_FooterText}
      >
        Terms & Privacy Policy
      </Text>
    </View>
  )
}
export default LandingScreen
