import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    logo: {
        width: 232,
        height: 30,
        marginTop: 40,
        alignSelf: 'center'
    },
    back: {
        width: 176,
        height: 24,
        marginTop: 40,
    },
    text: {
        color: '#023047',
        marginTop: 30,
    },
    song: {
        fontSize: 24,
        height: 33,
        fontWeight: '700',
        color: '#023047',
    },
    artist: {
        fontSize: 14,
        lineHeight: 19,
        color: '#023047',
        marginBottom: 20,
    },
    lyric: {
        fontSize: 14,
        lineHeight: 19,
        color: '#023047',
        textAlign: 'left'
    },
    more: {
        color: '#023047',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '700',
        textAlign: "center"
    },
});

export default styles;