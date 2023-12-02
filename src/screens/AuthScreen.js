import React, { useState, useEffect } from 'react';
import { Text, Pressable, View, Button, TextInput } from 'react-native';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from './styles';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signin, setshowsign] = useState(null);

  const handleCreateAccount = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("account created")
        })
      setshowsign(true)
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignIn = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("signed in ")
        })
    } catch (error) {
      console.error(error);
    }
  };

  if (!signin) {
    return (
      <View
        style={styles.container}
      >
        <TextInput value={email} onChangeText={text => setEmail(text)} />
        <TextInput value={password} onChangeText={text => setPassword(text)} />
        <Pressable
          onPress={handleCreateAccount}
        >
          <Text>Create Account</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View>
        <TextInput value={email} onChangeText={text => setEmail(text)} />
        <TextInput value={password} onChangeText={text => setPassword(text)} />
        <Pressable
          onPress={handleSignIn}
        >
          <Text>Sign In</Text>
        </Pressable>
      </View>
    )
  };
}

export default AuthScreen
