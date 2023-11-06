import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/Logo.png'

const LandingScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={ require('../assets/logo.gif')}
        />
        <Text style={styles.mainText}>
          A modern way of saying 'Hi'
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AuthScreen')}
          >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Terms & Privacy Policy
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  logo: {
    width:300,
    height:300,
    marginTop:130,
  },

  mainText: {
    color:'#FFFFFF',
    fontSize: 18,
    marginTop:170,
  }
  ,
  button: {
    width:300,
    height:60,
    marginTop:80,
    borderRadius:10,
    backgroundColor:'#FF334E',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText:{
    color:'white',
    fontSize: 25,
  },

  text: {
    fontSize: 14,
    color:'#808080',
    position: 'absolute',
    bottom:0,
    marginBottom:60,
  },
});

export default LandingScreen
