import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        paddingBottom: 30,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 232,
        height: 30,
        marginTop: 40,
    },
    title: {
        marginTop: 49,

        fontSize: 24,
        fontWeight: '700',
        lineHeight: 33,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    label: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
        lineHeight: 22,
    },
    input: {
        fontSize: 16,
        color: '#828282',
        fontWeight: '400',
    },
    inputBlock: {
        height: 59,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        width: 276,
        
        marginTop: 50,
    },
    historicButton: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#FFB703',
        width: 274,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    historicButtonText: {
        color: '#FFB703',
        fontWeight: '700',
        fontSize: 17
    },
    button: {
        marginTop: 50,
    },

});

export default styles;