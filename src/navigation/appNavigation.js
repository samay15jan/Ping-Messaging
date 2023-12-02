import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import AuthScreen from '../screens/AuthScreen'
import HomeScreen from '../screens/HomeScreen'
import useAuth from '../hooks/auth'

const Stack = createStackNavigator();

export function AppNavigation() {
    const { user } = useAuth();

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='WelcomeScreen'>
                    <Stack.Screen
                        name="WelcomeScreen"
                        options={{ headerShown: false }}
                        component={WelcomeScreen}
                    />
                    <Stack.Screen
                        name="AuthScreen"
                        options={{ headerShown: false }}
                        component={AuthScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen
                        name="HomeScreen"
                        options={{ headerShown: false }}
                        component={HomeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
