import { StyleSheet } from 'react-native';

const weatherDescriptionStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    wrapper: {
        width: '90%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 15
    },
    columStart: {
        flex: 2,
        paddingHorizontal: 5,
        justifyContent: 'flex-start',
        fontSize: 26,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    columEnd: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'flex-start',
        fontSize: 26,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    image: {
        width: 50,
        height: 50,
    },
});

export default weatherDescriptionStyles;
