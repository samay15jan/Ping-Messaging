import React, { useState, useEffect } from 'react';
import { Text, Pressable, View, Button, TextInput } from 'react-native';
import { auth, database } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import Styles from '../css/Styles';

const AuthScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signin, setshowsign] = useState(null);

  const handleCreateAccount = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up successful
          const userId = userCredential.user;
          set(ref(database, 'users/' + username), {
            id: userId,
            email: email,
          });
        })
      setshowsign(true)
    } catch (error) {
      console.error("An error occured ", error);
    }
  };
  const handleSignIn = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
        })
    } catch (error) {
      console.error("An error occured ", error);
    }
  };

  if (!signin) {
    return (
      <View
        
      >
        <TextInput value={username} onChangeText={text => setUsername(text)} />
        <TextInput value={email} onChangeText={text => setEmail(text)} />
        <TextInput value={password} onChangeText={text => setPassword(text)} />
        <Pressable
          style={Styles.WelcomePage_button}
          onPress={handleCreateAccount}
        >
          <Text>Create Account</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View
      >
        <TextInput value={email} onChangeText={text => setEmail(text)} />
        <TextInput value={password} onChangeText={text => setPassword(text)} />
        <Pressable
          style={Styles.WelcomePage_button}
          onPress={handleSignIn}
        >
          <Text>Sign In</Text>
        </Pressable>
      </View>
    )
  };
}

export default AuthScreen
