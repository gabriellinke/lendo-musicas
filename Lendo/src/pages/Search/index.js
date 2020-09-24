import React, { useState } from 'react';
import { View, Text, Image, TextInput,  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

import api from '../../services/api'
import styles from './styles';

function Search()
{
    const { navigate } = useNavigation();
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');

    async function handleSearch()
    {
        await AsyncStorage.setItem('@artist', artist);
        await AsyncStorage.setItem('@song', song);
        console.log(artist);
        console.log(song);
        if(artist !== '' && song !== '')
            api.get(`${artist}/${song}`)
                .then(async (response) => {
                    console.log(response.data);
                    if(response.data.lyrics !== "")
                    {
                        await AsyncStorage.setItem('@lyrics', response.data.lyrics);
                        console.log(response.data.lyrics);
                        navigate('SearchResult');
                    }
                    else
                        navigate('NotFound');
                })
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