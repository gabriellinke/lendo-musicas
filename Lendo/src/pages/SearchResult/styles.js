import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center'
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
        color: '#FFFFFF',
    },
    mainText: {
        fontSize: 18,
        lineHeight: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 43,
        marginTop: 40,
        fontWeight: '700',
    },
    button: {
        marginTop: 20,
    },
    musicImage: {
        width: 274,
        height: 152,
        marginTop: 38,
        borderRadius: 4,
    },
    opacity: {
        paddingHorizontal: 20,
        paddingVertical: 13,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 274,
        height: 152,
        paddingHorizontal: 20,
        paddingVertical: 13,
        flexDirection: "row",
        alignItems: 'flex-end',
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

});

export default styles;