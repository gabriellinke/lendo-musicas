import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import Logo from '../../assets/logo.svg';
import Search from '../../assets/search.svg';

import api from '../../services/api'
import styles from './styles';

function LatestSearches()
{
    const { navigate, goBack } = useNavigation();
    const [musics, setMusics] = useState([]);

    useEffect(() => {   // Acessa o histórico
        async function recoverHistoric()
        {
            let historic = [];
            let aux = await AsyncStorage.getItem('@musics');   // Recupera o histórico
            if(aux)
                historic = JSON.parse(aux);
            setMusics(historic);
        }

        recoverHistoric();
    }, [])

    function handleBack()   // Redireciona para a página anterior
    {
       goBack();
    }

    async function clearHistoric()   // Limpa o histórico
    {
        await AsyncStorage.setItem("@musics", '[]');
        navigate('Search');
    }

    async function handleSearch(artist, song)   // Consulta a letra na API
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

    return(
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1
        }}>
            <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
                <Logo style={styles.logo}/>
                <RectButton onPress={clearHistoric}>
                    <Text style={styles.clearButton}>Limpar histórico X</Text>
                </RectButton>

                {
                    musics.reverse().map((music, indice) => {
                        return(
                            <View style={styles.music} key={indice}>
                                <RectButton onPress={() => handleSearch(music.artist, music.song)}>
                                    <Text style={styles.artistSong}>{music.artist} - {music.song}</Text>
                                </RectButton>
                            </View>
                        )})
                }

                <RectButton onPress={handleBack} style={styles.button}>
                    <Search style={styles.search}/>
                </RectButton>
            </LinearGradient>
        </ScrollView>
    );
}

export default LatestSearches;