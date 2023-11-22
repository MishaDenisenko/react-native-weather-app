import { StyleSheet } from 'react-native';

const loadingStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fdf6aa',
    },
    text: {
        marginTop: 200,
        color: 'white',
        fontSize: 60,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
});

export default loadingStyles;