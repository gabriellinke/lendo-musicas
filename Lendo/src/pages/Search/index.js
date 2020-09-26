import React, { useState } from 'react';
import { View, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import Logo from '../../assets/logo.svg';
import SearchButton from '../../assets/search.svg';

import api from '../../services/api'
import styles from './styles';

function Search()
{
    const [artist, setArtist] = useState(''); // Armazena o nome do artista
    const [song, setSong] = useState(''); // Armazena o nome da música
    const { navigate } = useNavigation();

    async function handleSearch()   // Consulta a letra na API
    {
        // Armazena o nome do artista e da música no async storage pra permitir recuperar nas próximas páginas
        await AsyncStorage.setItem('@artist', artist);
        await AsyncStorage.setItem('@song', song);
        if(artist !== '' && song !== '')
            api.get(`${artist}/${song}`)    //Faz a consulta a API, salva a letra, ou se der errado manda para a página de letra não encontrada
                .then(async (response) => {
                    if(response.data.lyrics !== "")
                    {
                        await AsyncStorage.setItem('@lyrics', response.data.lyrics);
                        navigate('SearchResult');
                    }
                    else
                        navigate('NotFound');
                })
                .catch(response => {
                    console.log(response);
                    navigate('NotFound');
                })
    }

    function handleHistoric()
    {
        navigate('Historic');
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.inner}>
                    <Logo style={styles.logo}/>
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
                        <SearchButton style={styles.search}/>
                    </RectButton>

                </View>
            </KeyboardAvoidingView>
            
            <RectButton onPress={handleHistoric}>
                <View style={styles.historicButton}>
                    <Text style={styles.historicButtonText}>Histórico de buscas</Text>
                </View>
            </RectButton>
        </LinearGradient>
    );
}

export default Search;