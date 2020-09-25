import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 40,
    },
    logo: {
        width: 232,
        height: 30,
        marginTop: 40,
    },
    title: {
        marginTop: 49,
        marginBottom: 30,

        fontSize: 24,
        fontWeight: '700',
        lineHeight: 33,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    artist: {
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    song: {
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        fontWeight: '400',
    },
    music: {
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 276,
        padding: 10,
        
        marginTop: 20,
    },
    message: {
        paddingHorizontal: 43,
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        fontWeight: '400',
        marginTop: 80,
        marginBottom: 40,
    },
    clearButton: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#FFB703',
        width: 274,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearButtonText: {
        color: '#FFB703',
        fontWeight: '700',
        fontSize: 17
    },
    button: {
        marginTop: 40,
    },

});

export default styles;