import React, { useState } from 'react';
import { View, Text, Image, TextInput,  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

import styles from './styles';

function Search()
{
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');

    function handleSearch()
    {
        console.log(artist);
        console.log(song);
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Buscar letra</Text>

            <View style={styles.inputBlock}>
                <Text style={styles.label}>Artista</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Insira o nome do artista'
                    placeholderTextColor='#828282'
                    value={artist}
                    onChangeText={text => setArtist(text)}
                />
            </View>             
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Música</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Insira o nome da música'
                    placeholderTextColor='#828282'
                    value={song}
                    onChangeText={text => setSong(text)}
                />
            </View>

            <RectButton onPress={handleSearch} style={styles.button}>
                <Image source={search} style={styles.search}/>
            </RectButton>
        </LinearGradient>
    );
}

export default Search;