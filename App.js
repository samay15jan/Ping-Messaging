import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/app/LandingScreen'
import AuthScreen from './src/app/AuthScreen'
import { Header } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LandingScreen"
              options={{ headerShown: false }}
              component={LandingScreen}
            />
            <Stack.Screen
              name="AuthScreen"
              options={{ headerShown: false }}
              component={AuthScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}
