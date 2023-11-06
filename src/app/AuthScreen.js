import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/Logo.png'

const LandingScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Perfect you got it 
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',

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
