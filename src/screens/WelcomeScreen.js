import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.welcomePage_Logo}
        source={require('../../assets/logo.gif')}
      />
      <Text
        style={styles.welcomePage_Caption}
      >
        A modern way of saying 'Hi'
      </Text>
      <Pressable
        style={styles.welcomePage_Button}
        onPress={() => navigation.navigate('AuthScreen')}
      >
        <Text
          style={styles.welcomePage_Button_Text}
        >
          Continue
        </Text>
      </Pressable>
      <Text
        style={styles.welcomePage_FooterText}
      >
        Terms & Privacy Policy
      </Text>
    </View>
  )
}
export default LandingScreen
