import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },

    welcomePage_Logo: {
        width: 300,
        height: 300,
        marginTop: 130,
    },

    welcomePage_Caption: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 170,
    }
    ,
    welcomePage_Button: {
        width: 300,
        height: 60,
        marginTop: 80,
        borderRadius: 10,
        backgroundColor: '#FF334E',
        alignItems: 'center',
        justifyContent: 'center'
    },

    welcomePage_Button_Text: {
        color: 'white',
        fontSize: 25,
    },

    welcomePage_FooterText: {
        fontSize: 14,
        color: '#808080',
        position: 'absolute',
        bottom: 0,
        marginBottom: 60,
    },
});

export default Styles
