import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../css/Styles';

export default function HomeScreen() {
    return (
        <View
            style={Styles.container}
        >
            <Text
            style={Styles.WelcomePage_Caption}
	    >
	    HomeScreen
	    </Text>
        </View>
    )
}
