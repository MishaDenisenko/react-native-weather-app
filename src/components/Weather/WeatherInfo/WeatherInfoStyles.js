import { StyleSheet } from 'react-native';


const weatherInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title:{
        paddingHorizontal: 20,
        fontSize: 36,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    temp: {
        fontSize: 96,
        paddingHorizontal: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    text: {
        fontSize: 26,
        paddingHorizontal: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
})

export default weatherInfoStyles;