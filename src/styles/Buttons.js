import {StyleSheet} from 'react-native';

const TextStyles = StyleSheet.create({
    dark: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    clear: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    },
})

const ButtonStyles = StyleSheet.create({
    button: {
        marginTop: 15,
        width: '80%',
        borderRadius: 8,
        borderWidth: 1,
        padding: 20,
    },
    dark: {
        backgroundColor: '#333',
        borderColor: '#333',
    },
    clear: {
        backgroundColor: '#FFF',
        borderColor: '#CCC',
    },
})

export {ButtonStyles, TextStyles};